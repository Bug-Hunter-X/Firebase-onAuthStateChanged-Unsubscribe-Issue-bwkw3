# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener: improper unsubscription leading to memory leaks and unexpected behavior.  The provided code shows the problem and a solution.

## Problem
The `onAuthStateChanged` listener is not correctly unsubscribed when the component using it unmounts. This can lead to continued listening and potential issues such as memory leaks.

## Solution
The solution involves using a cleanup function to ensure the listener is removed when the component leaves the screen or is unmounted. The cleanup function returns the unsubscribe function provided by `onAuthStateChanged`.