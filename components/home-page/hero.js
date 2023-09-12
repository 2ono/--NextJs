import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/henry.jpeg"
          alt="An image showing Henry"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Henry</h1>
      <p>I blog about web development - especially react and node js</p>
    </section>
  );
}

export default Hero;
