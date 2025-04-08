import { User } from "../../types/user";
import { useNavigate } from "react-router-dom";
import styles from "./UserCard.module.scss";

interface Props {
  user: User;
}

export const UserCard = ({ user }: Props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/user/${user.id}`)}>
      <h3 className={styles.name}>{user.name}</h3>
      <p className={styles.email}>{user.email}</p>
      <p className={styles.city}>{user.address.city}</p>
    </div>
  );
};
