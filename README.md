# Firebase onAuthStateChanged Unsubscribe Race Condition in React

This repository demonstrates a potential race condition when unsubscribing from Firebase's `onAuthStateChanged` listener within a React component.  The issue arises when the component unmounts before the unsubscribe function can execute reliably, leading to potential memory leaks or unexpected behavior.

The `authBug.js` file showcases the problematic code. The `authBugSolution.js` demonstrates a more robust solution.

## Problem

The typical approach of using `return () => unsub();` within a React component's effect hook is not always guaranteed to unsubscribe cleanly, especially when the component unmounts quickly.

## Solution

The solution involves using a cleanup function that ensures the unsubscribe happens regardless of the component's unmounting timing.