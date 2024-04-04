# Weekend-Health-Challenge

## Problem

The problem we want to tackle involves selecting the words in a dictionary of words that can be created using letters from an input string. Ultimately, we want to be able to do this as efficiently as possible in terms of time complexity and space complexity, although we will prioritize time complexity as is generally the case with large scale applications.

## High Level Approach

My initial thought process involves finding the brute force solution to this problem, which would boil down to comparing each letter of the input string with each letter of each word in the input dictionary. Given that a string comparison without any sort of memoization would mean repeating work, we can use dictionaries to make for constant lookup time in terms of how many occurrences of each letter we see in each word, which is the metric we care about.

At a high level, my approach involves iterating through the input string once, creating a letter map with K:V of { letter in string:# of occurences } in the input string. Then, I iterate through each word in the input dictionary and create a new letter map of each dictionary[i] and then comparing to see if the letter map of dictionary[i] is a subset of our input string letter map. We add each word that satisfies this condition to the result array that we return at the end.

## Anaylsis

We can break down our algorithm into its time complexity and space complexity and calculate the effiency of our function.

Our algorithm iterates through the input string once and each word in the dictionary once. At the worst case in each step, we are creating a new dictionary and performing a comparison between all values of the two dictionaries. Thus, our worst case time complexity is O(2n), in which we are iterating through each string twice at each step. Asymptotically, this is linear in time.

As for space complexity, our algorithm needs to create a total extra space in memory of a dictionary for each string both in the input word and dictionary. Thus, our space complexity is both practically and asymptotically linear.

Time Complexity: O(N)
Space Complexity: O(N)
