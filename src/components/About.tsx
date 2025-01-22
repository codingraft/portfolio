import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I am a passionate Frontend Developer with 1.8 years of
                experience building user-friendly and visually appealing web
                applications. I specialize in creating responsive and dynamic
                interfaces using modern technologies like React, JavaScript,
                HTML, and CSS.
              </p>
             
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I thrive on turning design concepts into seamless digital
                experiences and constantly seek to learn and adapt to emerging
                trends in web development. My goal is to craft engaging,
                performant, and impactful applications that enhance user
                satisfaction and drive results.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Developer working"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
