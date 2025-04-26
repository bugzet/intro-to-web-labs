-- Step 1: Update the age of a user
UPDATE users
SET age = 40
WHERE name = 'Joe Johnson';

-- Step 2: Change the email of a user
UPDATE users
SET email = 'carl.johnson@example.com'
WHERE name = 'Carl Johnson';

-- Step 3: Verify the updated records
SELECT * FROM users;