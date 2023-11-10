import { doc, getDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { Card } from '../../components';
import { AuthContext } from '../../context';
import { db } from '../../services/firebaseConfig';
import { ProfileType } from '../../types/user';
import styles from './Home.module.scss';

export function Home() {
  const [profile, setProfile] = useState<ProfileType | null>(null);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const userCollection = doc(db, 'users', String(user?.uid));
    const data = await getDoc(userCollection);
    setProfile(data.data() as ProfileType);
  };

  return (
    <div className={styles.home}>
      <div className={styles.home__section}>Bem vindo!</div>
      {profile && (
        <div className={styles.home__section}>
          <Card>
            <ul className={styles.profile}>
              <li className={styles.profile__item}>
                {profile.firstName} {profile.lastName}
              </li>
              <li className={styles.profile__item}>{profile.email}</li>
            </ul>
          </Card>
        </div>
      )}
    </div>
  );
}
