// apps/user-service/src/lint-test.ts

// MISTAKE 1: Unused variable (Should trigger a warning)
const unusedVar = "I am not used";

// MISTAKE 2: Using 'var' instead of 'const/let' (Should trigger a warning)
var oldStyle = 123;

// OVERRIDE CHECK: Console log (Should pass silently because you set "no-console": "off")
console.log("This should be allowed!");
