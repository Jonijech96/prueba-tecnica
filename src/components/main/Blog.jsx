import React from "react";
import "./Blog.css";
import time from "../../assets/iconos/time.svg";

export const Blog = () => {
  return (
    <section className="blog" id="blog">
      <h2 className="title container">BLOG</h2>
      <div className="article-container">
        <div className="article-big">
          <article className="article-big-item item-city">
            <div className=" container article-content">
              <h4>CIUDAD</h4>
              <div className="article-text">
                <h3>Articulo de puente</h3>
                <p className="article-description">
                  Un puente es una construccion que permite salvar un accidente
                  geográfico
                </p>
                <span className="article-time">
                  <img alt="" src={time} width={15} /> Hace 2m
                </span>
              </div>
            </div>
          </article>

          <article className="article-big-item item-adventure">
            <div className="container article-content">
              <h4>AVENTURA</h4>
              <div className="article-text">
                <h3>Articulo de bosque</h3>
                <p className="article-description">
                  Un puente es una construccion que permite salvar un accidente
                  geográfico
                </p>
                <span className="article-time">
                  <img src={time} alt="" width={15} />
                  Hace 15m
                </span>
              </div>
            </div>
          </article>
        </div>
        <div className="article-small">
          <article className="article-small-item">
            <div className="article-small-image article-small-image-1"></div>
            <div className="article-small-text">
              <h4>Articulo de elefante</h4>
              <span className="article-time">
                <img src={time} alt="" width={15} />
                Hace 3h
              </span>
            </div>
          </article>
          <article className="article-small-item">
            <div className="article-small-image article-small-image-2"></div>
            <div className="article-small-text">
              <h4>Articulo de loro</h4>
              <span className="article-time">
                <img src={time} alt="" width={15} />
                Hace 4h
              </span>
            </div>
          </article>
          <article className="article-small-item">
            <div className="article-small-image article-small-image-3"></div>
            <div className="article-small-text">
              <h4>Articulo de camino</h4>
              <span className="article-time">
                <img src={time} alt="icon time" width={15} />
                Hace 8h
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
