// Sample user data (replace this with your actual user data)
const users = [
    { id: 1, name: 'John Doe', age: 25, location: 'Nairobi', interests: ['travel', 'movies'] },
    { id: 2, name: 'Jane Smith', age: 28, location: 'Nairobi', interests: ['music', 'sports'] },
    // Add more user profiles
  ];
  
  // Function to suggest connections for a given user
  function suggestConnections(userId, maxSuggestions = 3) {
    const currentUser = users.find(user => user.id === userId);
  
    // Sort users by profile similarity (you can customize this based on your criteria)
    const suggestedUsers = users
      .filter(user => user.id !== userId) // Exclude the current user
      .sort((a, b) => calculateProfileSimilarity(currentUser, a) - calculateProfileSimilarity(currentUser, b))
      .slice(0, maxSuggestions);
  
    return suggestedUsers;
  }
  
  // Function to calculate profile similarity (adjust weights based on importance)
  function calculateProfileSimilarity(userA, userB) {
    const weights = {
      age: 0.2,
      location: 0.3,
      interests: 0.5,
    };
  
    const ageDifference = Math.abs(userA.age - userB.age);
    const locationScore = userA.location === userB.location ? 1 : 0;
    const interestsScore = calculateInterestsSimilarity(userA.interests, userB.interests);
  
    // Calculate the weighted sum of scores
    const weightedSum = weights.age * (1 - ageDifference / 100) +
                       weights.location * locationScore +
                       weights.interests * interestsScore;
  
    return weightedSum;
  }
  
  // Function to calculate interests similarity
  function calculateInterestsSimilarity(interestsA, interestsB) {
    const commonInterests = interestsA.filter(interest => interestsB.includes(interest));
    return commonInterests.length / Math.max(interestsA.length, interestsB.length);
  }
  
  // Example usage
  const userId = 1;
  const suggestions = suggestConnections(userId);
  console.log('Connection Suggestions:', suggestions);
  