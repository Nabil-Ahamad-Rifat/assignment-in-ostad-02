
        // 1. Function to calculate the sum of two numbers
        function calculateSum(a, b) {
            return a + b;
        }

        // 2. Function to check if a number is even
        function isEven(num) {
            return num % 2 === 0;
        }

        // 3. Function to find the maximum number in an array
        function findMax(arr) {
            return Math.max(...arr);
        }

        // 4. Function to reverse a string
        function reverseString(str) {
            return str.split('').reverse().join('');
        }

        // 5. Function to filter odd numbers from an array
        function filterOddNumbers(arr) {
            return arr.filter(num => num % 2 !== 0);
        }

        // 6. Function to sum all elements in an array
        function sumArray(arr) {
            return arr.reduce((acc, curr) => acc + curr, 0);
        }

        // 7. Function to sort an array in ascending order
        function sortArray(arr) {
            return arr.sort((a, b) => a - b);
        }

        // 8. Function to capitalize the first letter of a string
        function capitalizeFirstLetter(str) {
            if (str.length === 0) return str;
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        // Function to display results
        function displayResults() {
            const resultsDiv = document.getElementById('results');
            
            resultsDiv.innerHTML = `
                <p>calculateSum(5, 3) = ${calculateSum(5, 3)}</p>
                <p>isEven(4) = ${isEven(4)}</p>
                <p>isEven(5) = ${isEven(5)}</p>
                <p>findMax([1, 2, 3, 4, 5]) = ${findMax([1, 2, 3, 4, 5])}</p>
                <p>reverseString('hello') = ${reverseString('hello')}</p>
                <p>filterOddNumbers([1, 2, 3, 4, 5]) = ${filterOddNumbers([1, 2, 3, 4, 5])}</p>
                <p>sumArray([1, 2, 3, 4, 5]) = ${sumArray([1, 2, 3, 4, 5])}</p>
                <p>sortArray([5, 3, 8, 1, 2]) = ${sortArray([5, 3, 8, 1, 2])}</p>
                <p>capitalizeFirstLetter('hello') = ${capitalizeFirstLetter('hello')}</p>
            `;
        }

        // Call displayResults to show the results on the page
        displayResults();
    