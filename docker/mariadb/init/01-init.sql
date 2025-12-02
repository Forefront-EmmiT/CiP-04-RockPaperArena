-- Skapa players-tabell
CREATE TABLE IF NOT EXISTS players (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Skapa results-tabell för matcher
CREATE TABLE IF NOT EXISTS results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    round_number INT NOT NULL,
    player_one_id INT NOT NULL,
    player_two_id INT NOT NULL,
    winner_id INT,
    played_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (player_one_id) REFERENCES players(id) ON DELETE CASCADE,
    FOREIGN KEY (player_two_id) REFERENCES players(id) ON DELETE CASCADE,
    FOREIGN KEY (winner_id) REFERENCES players(id) ON DELETE SET NULL
);

-- Skapa index för bättre prestanda
CREATE INDEX idx_round ON results(round_number);
CREATE INDEX idx_played_at ON results(played_at);

-- Lägg till några testspelare
INSERT INTO players (name) VALUES 
    ('Alice'),
    ('Bob'),
    ('Charlie'),
    ('Diana')
ON DUPLICATE KEY UPDATE name=name;
