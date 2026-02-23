CC := cc
CFLAGS := -std=c11 -Wall -Wextra -Wpedantic
TARGET := readme_generator
SRC := main.c

.PHONY: build run clean

build: $(TARGET)

$(TARGET): $(SRC)
	$(CC) $(CFLAGS) -o $(TARGET) $(SRC)

run: build
	./$(TARGET)

clean:
	rm -f $(TARGET)