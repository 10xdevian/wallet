// apps/user-service/src/lint-test.ts

// MISTAKE 1: Unused variable (Should trigger a warning)wrhtuer
const unusedVar = "I am not used";

// MISTAKE 2: Using 'var' instead of 'const/let' (Should trigger a warning)ieuruewr
const oldStyle = 123;

// OVERRIDE CHECK: Console log (Should pass silently because you set "no-console": "off")rwutu
console.log("This should be allowed!");
