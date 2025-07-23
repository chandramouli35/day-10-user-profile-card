import useProfile from "../hooks/useProfile";
import Toast from "./Toast";

function ProfileCard() {
  const {
    user,
    isEditing,
    errors,
    toast,
    nameInputRef,
    handleChange,
    handleToggle,
  } = useProfile();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 transition-all">
        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-4">
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full mx-auto sm:mx-0"
          />
          <div className="flex flex-col gap-2">
            {isEditing ? (
              <>
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Name
                  </label>
                  <input
                    ref={nameInputRef}
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Email
                  </label>
                  <input
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Role
                  </label>
                  <input
                    name="role"
                    value={user.role}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  {errors.role && (
                    <p className="text-red-500 text-sm">{errors.role}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    value={user.bio}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  {errors.bio && (
                    <p className="text-red-500 text-sm">{errors.bio}</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-gray-800">
                  {user.name}
                </h3>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-500">{user.role}</p>
                <p className="text-gray-500">{user.bio}</p>
              </>
            )}
          </div>
        </div>
        <button
          onClick={handleToggle}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 hover:scale-105 w-full sm:w-auto"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        {toast && <Toast show={toast.show} message={toast.message} />}
      </div>
    </div>
  );
}

export default ProfileCard;
