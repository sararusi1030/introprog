file = open("textfile.txt", "r")
words = file.read().split()
file.close()

counts = {}
for word in words:
    word = word.lower()
    counts[word] = counts.get(word, 0) + 1

common_words = sorted(counts.items(), key = lambda x:x[1], reverse=True)[:5]

print(common_words)
