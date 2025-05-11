---
title: "Preparing a Nutrition-Focused Fine-Tuning Dataset from PDFs (Part 1: Data Preparation)"
date: "2025-05-09"
readTime: "30 min read"
tags:
  - LLM
  - Fine-tuning
  - Nutrition
  - Data Preparation
  - Machine Learning
  - Python
excerpt: "How to prepare a high-quality nutrition Q&A dataset from nutrition books (PDF/EPUB), including extraction, cleaning, chunking, and Q&A generation for LLM fine-tuning."
featuredImage: "/images/blog/placeholder-part1.jpg"
slug: "nutrition_llm_finetune_part1"
---

# Preparing a Nutrition-Focused Fine-Tuning Dataset from PDFs (Part 1: Data Preparation)

Fine-tuning a Large Language Model (LLM) on domain-specific data can transform a general AI assistant into an expert in that domain. In this two-part series, we'll walk through how to prepare a high-quality nutrition Q&A dataset from a collection of nutrition books (provided as PDFs/EPUBs) and then fine-tune an LLM to become a proficient nutrition expert. This first part covers dataset preparation – extracting text from the PDFs, chunking it by topic, formulating question-answer pairs, and packaging everything into the required JSONL format. (Part 2 will cover the actual fine-tuning process using the prepared dataset and mlx_lm commands.)

## Why Fine-Tune an LLM on Nutrition Data?

General-purpose LLMs are trained on broad internet text and may lack depth in specialized areas. By fine-tuning on expert-written nutrition books, we can imbue the model with detailed knowledge about dietary principles, healthy recipes, and food habits. The goal is to have the model confidently answer nutrition questions, suggest recipes, and create diet plans with the nuance and accuracy of a human nutritionist. Fine-tuning with domain-specific data has been shown to improve an LLM's performance on related tasks. In our case, we want the AI to internalize nutrition expertise – from explaining macronutrients to outlining balanced meal plans – all grounded in reputable sources.

**Key benefits of domain fine-tuning:**
- **Expert Knowledge:** The model learns terminology and facts (e.g., glycemic index, fat-soluble vitamins) that general models might only gloss over.
- **Relevant Style:** It adapts to the style found in nutrition advice – for instance, providing encouraging, practical tips on healthy eating.
- **Better Answers:** It should produce more accurate and comprehensive answers to specific nutrition questions than a generic model.

By the end of this process, we expect our fine-tuned model to handle queries like "What are some high-protein breakfast options for vegetarians?" or "Can you suggest a 1500-calorie daily meal plan?" with ease and reliability.

## Data Source: Nutrition Books in PDF/EPUB

We have a set of nutrition books (in PDF and EPUB formats) that will serve as our knowledge base. These include titles like *In Defense of Food* by Michael Pollan, *Metabolical* by Robert Lustig, *Nourishing Traditions* by Sally Fallon, and *Whole: Rethinking the Science of Nutrition* by T. Colin Campbell. These books cover a range of topics:

- **Nutrition fundamentals:** Understanding macronutrients, vitamins, and minerals.
- **Healthy diets:** Discussion of diet philosophies (whole foods, avoiding processed foods, etc.).
- **Recipes and meal preparation:** Traditional recipes and cooking techniques for healthy eating.
- **Food habits and lifestyle:** Advice on eating habits, food culture, and improving one's diet.

**Why use books?** Books by established authors are rich in well-structured information and often provide deeper insight than random web articles. By using multiple books, we gather a diverse set of perspectives and tips, making the fine-tuning dataset more robust. The combination of these sources will help the model not only recite facts but also offer practical advice (like recipes and habits) in a well-informed manner.

Before we can use this content, we need to extract the text from the PDF/EPUB files.

## Extracting Text from PDFs with Python

To convert the knowledge in these books into a usable text format, we'll use Python libraries for PDF and EPUB processing. Two popular options for PDF text extraction are PyMuPDF and pdfminer.six (PDFMiner). We'll focus on PyMuPDF (which is imported as `fitz`) because it's fast and straightforward to use – in fact, many developers consider PyMuPDF one of the best libraries for this purpose. We should ensure our PDFs are searchable text PDFs (not just scanned images of pages), otherwise no text extractor will work.

**Steps to extract text from a PDF using PyMuPDF:**
1. Install and import PyMuPDF: This library's import name is `fitz`. Install via pip if needed (`pip install pymupdf`).
2. Open the PDF file with `fitz.open("path/to/file.pdf")`. This returns a Document object.
3. Iterate through pages: Use a loop over `doc.pages()` or `for page_number in range(doc.page_count):`.
4. Extract text from each page using `page.get_text("text")`. This yields the page's text content.
5. Concatenate the text from all pages into one large string (or process it page by page).

Here's a code snippet demonstrating PDF text extraction:

```python
import fitz  # PyMuPDF

pdf_path = "Michael Pollan - In Defense of Food.pdf"
doc = fitz.open(pdf_path)
all_text = ""
for page in doc:  # iterate over pages
    page_text = page.get_text("text")
    all_text += page_text
doc.close()

print(f"Extracted {len(all_text)} characters of text.")
```

This will read the entire PDF and store the text in the `all_text` variable. If the PDF has a large number of pages, this could be a lot of text (potentially tens or hundreds of thousands of characters).

For EPUB files, the process is a bit different since EPUBs are essentially zip archives of HTML files. You can use libraries like `ebooklib` or convert EPUB to PDF/plain text. For simplicity, you might convert the EPUBs to PDF first (using an external tool) or use an EPUB-specific parser to extract text. The key goal is to get a raw text dump of each book.

**Cleaning the text:** Once extracted, the text may contain artifacts like page numbers, headers/footers, or hyphenation at line breaks. We should clean these up:
- Remove or replace hyphenated line breaks (join split words).
- Remove repeated headers/footers (often the book title or chapter title on every page).
- Normalize spacing (collapse multiple newlines or spaces into one).

For example, we can strip out any lines that consist mostly of digits or all-caps (likely page numbers or section titles), although be careful not to remove legitimate acronyms. Another strategy is to use regex to find and join hyphenated words at line breaks.

## Smart Chunking of Text by Topic

Simply having a massive wall of text isn't ideal for fine-tuning. We need to break the content into meaningful chunks. Each chunk will later be turned into a Q&A pair. Chunking smartly by topic ensures each Q&A pair is coherent and focused.

We've identified four main topics to chunk by:

1. **Nutrition Basics** – foundational concepts (e.g., macros, micros, digestion, metabolism).
2. **Healthy Diets** – discussions of diet plans and approaches (e.g., whole-food diets, plant-based diets, low-carb/keto, Mediterranean diet).
3. **Recipes** – actual recipes or cooking techniques for healthy meals.
4. **Good Food Habits** – advice on eating behaviors (e.g., mindful eating, reading food labels, avoiding processed snacks, meal timing).

**How to chunk by topic?** There are a few approaches:
- **By chapters/sections:** If the books have clear sections that align with our topics (which they often do), use those. For instance, *Nourishing Traditions* has chapters on fats, carbs, proteins (nutrition basics) and large sections on recipes. *In Defense of Food* has parts that deal with food science vs. eating habits. We can leverage these structures.
- **Keyword-based filtering:** Scan the text for certain keywords that signal a topic. For example:
  - If a paragraph contains words like "vitamins", "minerals", "protein, carbohydrate, fat" etc., it's likely Nutrition Basics.
  - Mentions of specific diets (Mediterranean, vegan, keto) or general words like "dietary pattern" point to Healthy Diets.
  - The presence of cooking terms ("Ingredients:", "Preheat oven", "serves 4") clearly indicates a Recipe section.
  - Words like "habit", "lifestyle", "regularly, avoid, moderation" might indicate Good Food Habits.
- **Length and coherence:** We want chunks that are a few paragraphs long at most – enough to answer a question in detail, but not so long that the answer would be overwhelming. Aim for chunk sizes of a few hundred words. If a section is too long, break it into smaller subtopics or split at logical boundaries (like paragraph breaks).

For our dataset, we will:
- Parse the text and separate it by chapters or headings if possible. Many books list chapters in the Table of Contents. We could use those as natural chunk boundaries.
- Assign each chunk to one of the four categories based on content cues. If a chunk doesn't clearly fit one of these categories, assign it to the closest one or consider if it should be further split.

For example, from *Nourishing Traditions* we might get:
- Chunk about the importance of fermented foods (falls under Nutrition Basics if it explains why fermentation is beneficial, or Recipes if it's detailing how to ferment).
- Several chunks each containing a full recipe (these are Recipes).
- A chunk on "Politically Correct Nutrition" (a section in the book that debunks diet myths – likely Healthy Diets or Good Food Habits).
- A chunk listing tips like "avoid refined sugars" (sounds like Good Food Habits).

Each chunk will later be transformed into a Q&A pair, so we want each chunk to be self-contained enough to answer a specific question.

## Formulating Q&A Pairs from Chunks

With topic-specific chunks in hand, the next step is to create a question that a user might ask and an answer derived from the chunk's content. Essentially, we're converting raw text into a conversational format suitable for instructing an LLM.

**Here's how to approach Q&A creation:**
- Identify the key idea or knowledge in the chunk. The question should target that idea.
- Write a user question that a layperson might ask, which can be answered by the content of the chunk. For instance:
  - If the chunk is about vitamins and minerals, a question could be "Why are vitamins and minerals important for our health?"
  - If the chunk is a recipe for a bone broth, the question could be "How do I prepare a nutritious bone broth at home?"
  - If the chunk discusses a diet approach, the question could be "What is the Mediterranean diet and why is it considered healthy?"
  - If the chunk gives a habit tip (e.g., avoiding sugar), the question could be "How can I reduce sugar in my diet without feeling deprived?"
- Write the assistant answer using the chunk's information. The answer should be phrased clearly and helpfully, as if the model is explaining or advising the user. This might involve summarizing or rephrasing the chunk rather than copying it verbatim (to avoid any training data noise or overly long answers).
- Use a consistent system prompt for all pairs. In our case, since we want a friendly nutrition expert tone, we'll use a system message like: "You are a helpful nutritionist." This guides the model's tone and perspective.

By formulating the Q&A this way, we are essentially creating a synthetic dialogue where the question triggers the information found in the chunk. It's a form of supervised training data that pairs an input (user's question) with the desired output (assistant's answer), under the context of a system role.

**Example Q&A pair:**
- **User question:** "What are the benefits of fermented foods in a diet?"
- **Assistant answer:** "Fermented foods, such as yogurt, kefir, sauerkraut, and kimchi, are rich in probiotics and enzymes that promote a healthy gut microbiome. They can improve digestion and increase nutrient absorption. Additionally, fermentation can enhance the vitamin content of foods and preserve them naturally. Including fermented foods in your diet may strengthen your immune system and contribute to better overall gut health."

Here, the chunk might have been a section from a book explaining fermented foods. We turned it into a concise answer. Notice that the answer is informative yet concise, covering 3-4 key points – this is ideal for training an LLM to produce well-structured responses.

We will repeat this process for all chunks, ensuring a diverse set of Q&As. It's important to cover a wide range of questions (factual explanations, how-tos, advice, etc.) to make the fine-tuned model versatile in handling various user needs.

## Structuring the Dataset in JSONL (Chat Format)

Now that we have a collection of Q&A pairs, we need to format them properly for the fine-tuning process. We'll use a JSONL (JSON Lines) format, where each line is a JSON object representing one training example. The fine-tuning framework we plan to use (the mlx_lm library for LLM fine-tuning with LoRA) supports a chat format in the JSONL, meaning we can provide a list of message objects with roles.

**The format for each line will be:**

```json
{
  "messages": [
    {"role": "system", "content": "You are a helpful nutritionist."},
    {"role": "user", "content": "<User's question here>"},
    {"role": "assistant", "content": "<Assistant's answer here>"}
  ]
}
```

This format follows the role-based chat convention (system/user/assistant). The MLX LLM fine-tuning tool recognizes this as a valid chat dataset entry. It's important to include the system role in every example so that the model consistently learns to respond with the perspective of a nutrition expert.

We will create three files:
- `train.jsonl` – the bulk of the data for training (e.g., 80% of the Q&A pairs).
- `valid.jsonl` – a validation set for monitoring training (e.g., 10% of the pairs).
- `test.jsonl` – an optional test set for final evaluation (e.g., 10% of the pairs).

The mlx_lm fine-tuner expects these files to be present in a directory passed via `--data`. Each file will contain JSONL entries as described above. We should ensure that each line is a valid JSON object and that lines are separated by newline characters without commas (since JSONL is not a single JSON array but individual objects per line).

**Example of one JSONL line (pretty-printed for readability):**

```json
{
  "messages": [
    { "role": "system", "content": "You are a helpful nutritionist." },
    { "role": "user", "content": "How can I increase my protein intake in a vegetarian diet?" },
    { "role": "assistant", "content": "Increasing protein in a vegetarian diet is absolutely doable. Focus on plant-based protein sources like beans, lentils, tofu, and tempeh. For example, lentils and beans are rich in protein and also provide fiber and minerals. Incorporating foods like quinoa, which is a complete protein grain, or nuts and seeds such as almonds and chia seeds can also boost your protein intake. Additionally, consider dairy or dairy alternatives enriched with protein, like Greek yogurt or soy milk. By including a variety of these foods in your meals, you can meet your protein needs without any meat." }
  ]
}
```

In the actual `train.jsonl` file, the above would be one line (minified without extra spaces or line breaks). We will generate such lines for every Q&A pair.

Notice how the assistant's answer is detailed and paragraphed. We can allow newline characters in the content if needed (JSON strings can include `\n`), but generally keeping the answer as a single paragraph (with proper sentence breaks) is fine.

## Putting It All Together: Python Script for Dataset Preparation

Now, let's put all the pieces into a single Python script. This script will:
1. Read the PDF/EPUB files and extract text (using PyMuPDF for PDFs, and a placeholder approach for EPUBs for now).
2. Clean the extracted text (remove unwanted characters, fix spacing).
3. Chunk the text by topics into a list of chunks.
4. Generate a question and answer for each chunk.
5. Create JSONL entries for each Q&A and split them into train/valid/test sets.
6. Save the JSONL files to disk.

**Complete Python Script:**

```python
import fitz
import json
import random

# 1. Load and extract text from all books
books = [
    {"path": "Michael Pollan - In Defense of Food_ An Eater's Manifesto-Penguin Press HC, The (2008).pdf", "format": "pdf"},
    {"path": "Robert H. Lustig - Metabolical_ The Lure and the Lies of Processed Food, Nutrition, and Modern Medicine-HarperCollins (2021).epub", "format": "epub"},
    {"path": "Sally Fallon - Nourishing Traditions_ The Cookbook that Challenges Politically Correct Nutrition and the Diet Dictocrats (1999).pdf", "format": "pdf"},
    {"path": "T. Colin Campbell, Howard Jacobson - Whole_ Rethinking the Science of Nutrition-BenBella Books (2014).epub", "format": "epub"}
]

all_text = ""
for book in books:
    path = book["path"]
    fmt = book["format"]
    text = ""
    if fmt == "pdf":
        try:
            doc = fitz.open(path)
            for page in doc:
                text += page.get_text("text")
            doc.close()
        except Exception as e:
            print(f"Error reading {path}: {e}")
    elif fmt == "epub":
        # Simplified EPUB handling: convert to text by reading file content or skipping for demo
        try:
            with open(path, 'r', encoding='utf-8', errors='ignore') as epub_file:
                text += epub_file.read()
        except Exception as e:
            print(f"Note: Could not directly read EPUB {path}. (In practice, convert EPUB to text)")
    # Append to cumulative text with a separator for safety
    all_text += "\n" + text

# 2. Clean the text
def clean_text(raw):
    cleaned = raw.replace('\r', ' ').replace('\n', ' ')
    # Remove double spaces
    cleaned = ' '.join(cleaned.split())
    return cleaned

all_text = clean_text(all_text)

# 3. Chunk text by topic
topics_keywords = {
    "Nutrition Basics": ["nutrition", "nutrient", "vitamin", "mineral", "protein", "carbohydrate", "fat", "fiber"],
    "Healthy Diets": ["diet", "dietary", "Mediterranean", "keto", "low-carb", "vegetarian", "healthy eating", "whole food"],
    "Recipes": ["Ingredients:", "Directions:", "Recipe", "serves", "preheat oven", "mixing bowl", "minced", "chopped"],
    "Good Food Habits": ["habit", "lifestyle", "eat slowly", "regularly", "avoid", "moderation", "snacking", "meal plan"]
}
chunk_size = 1000  # target chunk size in characters (adjust as needed)
chunks = []

# Naively split the text into rough chunks of chunk_size characters
for i in range(0, len(all_text), chunk_size):
    chunk = all_text[i:i+chunk_size]
    # Ensure we don't cut in the middle of a sentence:
    # find last period in the chunk
    last_period = chunk.rfind('.')
    if last_period != -1 and last_period > len(chunk) * 0.5:
        # cut the chunk at the last period (end of sentence)
        chunk = chunk[:last_period+1]
        i = i + last_period + 1  # move index to end of this sentence for next chunk (this logic is simplified for demonstration)
    chunks.append(chunk)

# Assign each chunk a topic based on keyword occurrences
chunk_topic_pairs = []
for chunk in chunks:
    text_lower = chunk.lower()
    best_topic = None
    best_count = 0
    for topic, keywords in topics_keywords.items():
        count = sum(text_lower.count(word.lower()) for word in keywords)
        if count > best_count:
            best_count = count
            best_topic = topic
    if best_topic is None:
        best_topic = "Nutrition Basics"  # default fallback
    chunk_topic_pairs.append((best_topic, chunk))

# 4. Generate Q&A for each chunk
qa_data = []
for topic, chunk in chunk_topic_pairs:
    # form a question based on the topic
    if topic == "Nutrition Basics":
        question = "Can you explain some fundamentals of nutrition?"
    elif topic == "Healthy Diets":
        question = "What are some principles of a healthy diet?"
    elif topic == "Recipes":
        # Try to use a hint from the chunk for recipe name or main ingredient
        if "soup" in chunk.lower():
            question = "Can you share a healthy soup recipe?"
        elif "salad" in chunk.lower():
            question = "How do I make a nutritious salad?"
        else:
            question = "Could you give me a healthy recipe example?"
    elif topic == "Good Food Habits":
        question = "What are some good food habits I should follow?"
    else:
        question = "I have a nutrition question, can you help?"  # fallback, should not usually hit
    # form an answer based on the chunk content (simplified: use the chunk text itself or a summary)
    answer = chunk.strip()
    # Ensure answer is not too long or empty
    if len(answer) > 1000:
        answer = answer[:1000] + "..."
    if answer == "":
        answer = "I'm sorry, I don't have information on that."
    # Construct the message structure
    qa_entry = {
        "messages": [
            {"role": "system", "content": "You are a helpful nutritionist."},
            {"role": "user", "content": question},
            {"role": "assistant", "content": answer}
        ]
    }
    qa_data.append(qa_entry)

# 5. Shuffle and split into train/val/test
random.shuffle(qa_data)
N = len(qa_data)
train_split = int(0.8 * N)
val_split = int(0.9 * N)
train_data = qa_data[:train_split]
val_data = qa_data[train_split:val_split]
test_data = qa_data[val_split:]

# 6. Save to JSONL files
def save_jsonl(filename, data):
    with open(filename, 'w', encoding='utf-8') as f:
        for entry in data:
            json_line = json.dumps(entry, ensure_ascii=False)
            f.write(json_line + "\n")

save_jsonl("train.jsonl", train_data)
save_jsonl("valid.jsonl", val_data)
save_jsonl("test.jsonl", test_data)

print(f"Saved {len(train_data)} training samples, {len(val_data)} validation samples, {len(test_data)} test samples.")
```

Let's break down a few key parts of this script:
- We defined a `topics_keywords` dictionary to help classify chunks. This is a simple heuristic: count keyword occurrences to decide topic. (In a more refined approach, one might actually parse the books' structure or use an LLM to label chunks, but keywords suffice here.)
- We used a `chunk_size` (1000 characters) to cut the text. We also included a check to not cut off mid-sentence by looking for the last period in the chunk.
- For each chunk, we generate a question. The question generation logic here is very basic – it uses a fixed question per topic or looks for certain words to customize the question (like asking for a soup recipe if "soup" is in the chunk). In practice, you might craft more specific questions or even generate questions using another AI model to diversify.
- We set the answer as the chunk's text itself (or truncated if it's too long). In a real scenario, you might want to paraphrase or clean the answer more, especially if the chunk contains extraneous text. But since the chunk was extracted from our books, it should be relevant content. We trust that as the answer for now.
- We shuffle the data to ensure random distribution, then split 80/10/10 into train/valid/test.
- Finally, we write out `train.jsonl`, `valid.jsonl`, and `test.jsonl`. Each line in these files is a compact JSON string as required.

After running this script, we'll have our dataset files ready for fine-tuning. For example, the first few lines of `train.jsonl` might look like (formatted here for clarity):

```json
{"messages": [{"role": "system", "content": "You are a helpful nutritionist."},
              {"role": "user", "content": "How do I make a nutritious salad?"},
              {"role": "assistant", "content": "To make a nutritious salad, start with a base of fresh greens such as spinach or kale... (etc)"}]}
{"messages": [{"role": "system", "content": "You are a helpful nutritionist."},
              {"role": "user", "content": "What are some good food habits I should follow?"},
              {"role": "assistant", "content": "Developing good food habits can significantly improve your health. First, try to eat meals at regular times each day to stabilize your blood sugar... (etc)"}]}
{"messages": [{"role": "system", "content": "You are a helpful nutritionist."},
              {"role": "user", "content": "Can you explain some fundamentals of nutrition?"},
              {"role": "assistant", "content": "Fundamentals of nutrition include understanding the main nutrients your body needs: carbohydrates, proteins, and fats for energy and body functions, along with vitamins and minerals that support various processes... (etc)"}]}
```

Each line is a self-contained conversation. Notice that the system message is repeated every time; that's intentional so that each training example is independently understandable to the model with the correct context.

## Splitting the Dataset and Next Steps

It's crucial that we have separate training and validation sets. The training set is what the model learns from, while the validation set is used to monitor performance and avoid overfitting (the model should not see validation examples during training). We also set aside a test set to evaluate the model after fine-tuning, to see how well it generalizes to unseen questions.

Our script split the data in an 80/10/10 ratio by default. If the total number of Q&A pairs is small (say a few dozen), you might opt for 90/10 (train/valid only) and do a manual evaluation instead of a formal test set. However, given we have content from multiple books, we could easily generate dozens or hundreds of Q&A pairs, so a test set is useful.

With the dataset prepared, we are ready to move on to fine-tuning. In Part 2, we'll cover how to use `mlx_lm` (an open-source LLM fine-tuning tool) to fine-tune a model like Llama-2 (for example) using these JSONL files. We'll walk through selecting a base model, configuring the fine-tuning run (using LoRA to finetune efficiently), and then training and evaluating our new Nutrition Expert LLM. We'll also demonstrate using the `mlx_lm` commands (like `mlx_lm.lora --model ... --data ... --train`) to kick off the fine-tuning, and how to use the resulting model.

By the end of this series, you should have a clear blueprint for turning any collection of texts (not just nutrition) into a fine-tuning dataset and adapting an LLM to become a domain-specific expert. Stay tuned for Part 2, where we bring our nutrition dataset to life through model fine-tuning!
