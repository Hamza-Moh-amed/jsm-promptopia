import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & share</h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient  text-center">AI Powered Prompts</span>
      <p className="dec text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio
        ducimus corporis, officiis laudantium excepturi perferendis inventore
        similique non, expedita voluptas obcaecati. Earum recusandae odit
        voluptate, enim dolorum sunt! Animi.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
