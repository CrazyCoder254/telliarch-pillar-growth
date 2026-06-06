import { motion } from "framer-motion";
import aboutBackground from "@/assets/about-bg.jpg";
import imgIndividuals from "@/assets/serve-individuals.jpg";
import imgFamilies from "@/assets/serve-families.jpg";
import imgSchools from "@/assets/serve-schools.jpg";
import imgHospitals from "@/assets/serve-hospitals.jpg";
import imgCorporates from "@/assets/serve-corporates.jpg";

const groups = [
  { img: imgIndividuals, label: "Individuals" },
  { img: imgFamilies, label: "Families" },
  { img: imgSchools, label: "Schools & Educational Institutions" },
  { img: imgHospitals, label: "Hospitals & Healthcare Providers" },
  { img: imgCorporates, label: "Corporates & Organizations" },
];

const WhoWeServe = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${aboutBackground})` }} />
    <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-accent/90" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-14"
      >
        <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Who We Serve</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          <span className="text-white">Care & growth for </span>
          <span className="text-gold-gradient">every season of life</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary via-white to-secondary mx-auto mb-6 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -8, scale: 1.04 }}
            className="group rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-secondary/40 transition-all duration-500"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={g.img}
                alt={g.label}
                loading="lazy"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <p className="font-semibold text-[#F0D4BC] text-sm drop-shadow">{g.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeServe;
