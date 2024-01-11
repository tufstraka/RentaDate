import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faComment, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Dashboard = ({ currentUser }) => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 min-h-screen font-poppins">
      {/* User Profile Section */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-bold mb-6">My Profile</h2>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={currentUser.photoURL}
              alt="User Profile"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{currentUser.displayName}</h3>
            <p className="text-gray-600">25, Nairobi</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600">
          Fun-loving adventurer with a passion for creating memorable moments. Looking for someone to share
          laughter and adventures with.
        </p>
      </div>

      {/* Match Suggestions Section */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-bold mb-6">Match Suggestions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Match Card */}
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <div className="h-32 overflow-hidden mb-4 rounded-md">
              <img
                className="w-full h-full object-cover"
                src="https://source.unsplash.com/featured/?people"
                alt="Match"
              />
            </div>
            <h3 className="text-lg font-semibold">Jane Smith</h3>
            <p className="text-gray-600">28, Nairobi</p>
            <button className="bg-pink-500 text-white mt-2 py-2 px-4 rounded-full font-bold">
              Connect
            </button>
          </div>

          {/* Additional Match Cards Go Here */}
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Recent Activity</h2>
        <div className="flex items-center space-x-4 mb-4">
          <FontAwesomeIcon icon={faHeart} className="text-pink-500" />
          <p className="text-gray-600">You liked Jane Smith</p>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <FontAwesomeIcon icon={faComment} className="text-blue-500" />
          <p className="text-gray-600">You received a message from Alex Johnson</p>
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faUserFriends} className="text-green-500" />
          <p className="text-gray-600">You matched with Sarah Williams</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
