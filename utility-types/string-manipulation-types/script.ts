// Type created to accept both purchase operations
type TransactionType = 'Credit' | 'Debit';

// Uppercase<StringType>
type TransactionTypeUpper = Uppercase<TransactionType>;

// Lowercase<StringType>
type TransactionTypeLower = Lowercase<TransactionType>;

// Testing to accept different ways of writing purchase operations
const TransactionTest1: TransactionType | TransactionTypeUpper | TransactionTypeLower = 'Debit';
const TransactionTest2: TransactionType | TransactionTypeUpper | TransactionTypeLower = 'DEBIT';
const TransactionTest3: TransactionType | TransactionTypeUpper | TransactionTypeLower = 'debit';

// Capitalize<StringType>
type LowercaseName = 'antonio';
type Name = Capitalize<LowercaseName>;

// Uncapitalize<StringType>
type UppercaseWord = 'WONDERFUL';
type CrazyWord = Uncapitalize<UppercaseWord>;