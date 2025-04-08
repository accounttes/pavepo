import { useState, useMemo } from "react";
import { useUsers } from "../../hooks/useUsers";
import styles from "./UsersListPage.module.scss";
import { UserCard } from "../../components/UserCard/UserCard";

function UsersListPage() {
  const { data, isLoading, error } = useUsers();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredUsers = useMemo(() => {
    if (!data) return [];

    return data.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        !filter ||
        user.address.city.toLowerCase().includes(filter.toLowerCase());

      return matchesSearch && matchesFilter;
    });
  }, [data, search, filter]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users: {error.message}</p>;

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Введите email или имя"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Введите город"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.grid}>
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UsersListPage;
