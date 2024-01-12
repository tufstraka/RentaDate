const Messages = () => {
  // Sample data for messages
  const messagesData = [
    { id: 1, name: 'Jane Smith', message: 'Hey, how are you?', imageUrl: 'https://source.unsplash.com/featured/?portrait' },
    { id: 2, name: 'Alex Johnson', message: "Let's grab coffee this weekend!", imageUrl: 'https://source.unsplash.com/featured/?people' },
    { id: 3, name: 'Sarah Williams', message: 'Thanks for the match! Excited to get to know you.', imageUrl: 'https://source.unsplash.com/featured/?woman' },
  ];

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 min-h-screen h-full font-poppins">
      {/* Messages Section */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Messages</h2>
        <div className="space-y-4">
          {messagesData.map((message) => (
            <div key={message.id} className="flex items-center space-x-4 p-4 rounded-md hover:bg-gray-100 transition">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={message.imageUrl}
                  alt={`Profile of ${message.name}`}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{message.name}</h3>
                <p className="text-gray-600">{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;

