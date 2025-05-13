CREATE TABLE vocabulary (
    id SERIAL PRIMARY KEY,
    word VARCHAR(100) NOT NULL,
    definition TEXT NOT NULL,
    example_sentence TEXT,
    difficulty_level VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample vocabulary data
INSERT INTO vocabulary (word, definition, example_sentence, difficulty_level) VALUES
    ('Ephemeral', 'Lasting for a very short time', 'The beauty of cherry blossoms is ephemeral, lasting only a few days each spring.', 'Advanced'),
    ('Ubiquitous', 'Present, appearing, or found everywhere', 'Smartphones have become ubiquitous in modern society.', 'Intermediate'),
    ('Serendipity', 'The occurrence of events by chance in a happy or beneficial way', 'Finding this rare book was pure serendipity.', 'Advanced'),
    ('Eloquent', 'Fluent or persuasive in speaking or writing', 'She gave an eloquent speech that moved the entire audience.', 'Intermediate'),
    ('Pragmatic', 'Dealing with things sensibly and realistically', 'We need a pragmatic approach to solve this problem.', 'Intermediate'),
    ('Ambiguous', 'Open to more than one interpretation', 'The instructions were ambiguous and led to confusion.', 'Intermediate'),
    ('Resilient', 'Able to recover quickly from difficulties', 'Children are often more resilient than adults.', 'Intermediate'),
    ('Meticulous', 'Showing great attention to detail', 'The artist was meticulous in his work.', 'Advanced'),
    ('Perseverance', 'Persistence in doing something despite difficulty', 'Success comes to those who show perseverance.', 'Intermediate'),
    ('Eloquent', 'Fluent or persuasive in speaking or writing', 'The professor was eloquent in explaining complex theories.', 'Intermediate'); 