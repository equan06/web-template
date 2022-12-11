CREATE TABLE users
(
    id INT GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    email TEXT,
)

CREATE TABLE accounts
(
    id GENERATED ALWAYS AS IDENTIY,
    userId INT REFERENCES users(id),
    type TEXT,
    provider TEXT,
    providerAccountId TEXT,
    access_token TEXT,
    expires_at INT



)