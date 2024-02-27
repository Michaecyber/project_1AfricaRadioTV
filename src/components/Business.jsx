import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Tune in to 1AfricaRadioTV: <br className="sm:block hidden" /> Uniting Africa!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      1AfricaRadioTV has the best music selection! I love listening to their diverse range of genres. Sharing Its Stories with the World!" - Feroza Moosa
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
    <div>
   <iframe> src="https://radio3.eclipse-streaming.co.za/public/1africaradio/embed?theme=light" frameborder="0" allowtransparency="true" style="width: 460px; min-height: 30px; border: 0;" </iframe> 
    </div>
  </section>
);

export default Business;
