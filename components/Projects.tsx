"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "120px 60px",
        background: "#0b0b0b",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          fontSize: 48,
          color: "#fff",
          marginBottom: 40,
        }}
      >
        Projects
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            style={{
              border: "2px solid",
              borderColor:
                project.status === "Active"
                  ? "#3d0f84"
                  : project.status === "Past"
                  ? "#555"
                  : "#8a3dcf",
              borderRadius: 12,
              padding: 24,
              background: "#111",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <h3
              style={{
                fontSize: 24,
                color: "#fff",
                margin: 0,
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "#3d0f84",
                textTransform: "uppercase",
              }}
            >
              {project.status}
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#ccc",
              }}
            >
              {project.description}
            </p>
            {project.link !== "#" && (
              <a
                style={{
                  marginTop: "auto",
                  color: "#fff",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
                href={project.link}
                target="_blank"
              >
                Learn More
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
