// 🔹 1. Partial<T> — Make All Props Optional
interface User {
    id: number;
    name: string;
    email: string;
}

let updateUser: Partial<User> = {
    name: "Waqar Rana",
};
// ✅ Useful for update forms, where not all fields are required.

// 🔸 2. Pick<T, K> — Extract Only Specific Props
type UserPreview = Pick<User, "id" | "name">;

const user: UserPreview = {
    id: 1,
    name: "Waqar",
};
// ✅ Great for public views or compact cards! 

// 🔹 3. Omit<T, K> — Exclude Props
type UserWithoutEmail = Omit<User, "email">;

const newUser: UserWithoutEmail = {
    id: 1,
    name: "Rana",
};
// ✅ Hide sensitive info, like passwords or emails.

// 🔒 4. Readonly<T> — Lock All Properties 
const userInfo: Readonly<User> = {
    id: 101,
    name: "Waqar",
    email: "waqar@example.com",
};
// userInfo.name = "Ali"; ❌ Error: Cannot assign to 'name'
// ✅ Perfect for constants or API responses you don’t want to accidentally change. 

// 🧾 5. Record<K, T> — Dynamic Object Type 
type Roles = "admin" | "user" | "guest";

const rolePermissions: Record<Roles, string[]> = {
    admin: ["create", "edit", "delete"],
    user: ["read", "comment"],
    guest: ["read"],
};
// ✅ Super useful for lookup tables or object maps. 