import { useState, useEffect, useRef } from "react";

function useProfile() {
  const initialUser = {
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
    bio: "Passionate about coding and building cool stuff!",
    avatar: "https://via.placeholder.com/100",
  };
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : initialUser;
  });
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ show: false, message: "" });
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (isEditing && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const validate = () => {
    const newErrors = {};
    if (!user.name.trim()) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email))
      newErrors.email = "Valid email required";
    if (!user.role.trim()) newErrors.role = "Role is required";
    if (!user.bio.trim()) newErrors.bio = "Bio is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleToggle = () => {
    if (isEditing) {
      if (validate()) {
        setToast({ show: true, message: "Profile saved!" });
        setTimeout(() => setToast({ show: false, message: "" }), 2000);
        setIsEditing(false);
      }
    } else {
      setIsEditing(true);
    }
  };

  return {
    user,
    isEditing,
    errors,
    toast,
    nameInputRef,
    handleChange,
    handleToggle,
  };
}

export default useProfile;
