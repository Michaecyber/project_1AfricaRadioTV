import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-8`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[292px] min-w-[220px] m5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[292px] w-[200px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
