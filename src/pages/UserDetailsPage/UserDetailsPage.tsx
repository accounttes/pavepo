import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUsers";
import styles from "./UsersDetailsPage.module.scss";

function UserDetailsPage() {
  const { id } = useParams();
  const { data, isLoading } = useUser(id!);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>User not found</p>;

  return (
    <div className={styles.details}>
      <h2>{data.name}</h2>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Phone:</strong> {data.phone}
      </p>
      <p>
        <strong>Website:</strong> {data.website}
      </p>
      <p>
        <strong>Address:</strong> {data.address.street}, {data.address.city}
      </p>
      <p>
        <strong>Company:</strong> {data.company.name}
      </p>
    </div>
  );
}

export default UserDetailsPage;
