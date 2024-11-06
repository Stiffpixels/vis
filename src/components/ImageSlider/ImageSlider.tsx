"use client";
import Image from "next/image";
import "./ImageSlider.css";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft as RiArrowLeftWideFill, ChevronRight as RiArrowRightWideFill } from "lucide-react"
import Link from "next/link";
import React from "react"

export type sliderImages = {
    url: string;
    alt: string;
    position?: string;
    link?: string;
    content?: string;
};

export default function ImageSlider({ images }: { images: sliderImages[] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleLeftButtonClick = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(images.length - 1);
            return;
        }
        setCurrentImageIndex(currentImageIndex - 1);
    };

    const handleRightButtonClick = useCallback(() => {
        setCurrentImageIndex(index => {
            if (index === images.length - 1) {
                return 0
            }
            return index + 1;
        })
    }, [setCurrentImageIndex, images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleRightButtonClick();
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, [handleRightButtonClick]);

    return (
        <div className="slider">
            <div className="slider__images flex overflow-hidden">
                {images.map((image, index) => {
                    return (
                        <div className="slider__image-container" key={index}>
                            <Image
                                src={image.url}
                                alt={image.alt}
                                width={0}
                                height={0}
                                sizes="100%"
                                className="slider__image"
                                style={{
                                    transform: `translateX(${-currentImageIndex * 100}%)`,
                                    objectPosition: image.position,
                                }}
                            />
                        </div>
                    );
                })}
            </div>

            <div className="slider__buttons">
                <button
                    className="slider__button slider__button--left"
                    onClick={handleLeftButtonClick}
                >
                    <RiArrowLeftWideFill />
                </button>
                <button
                    className="slider__button slider__button--right"
                    onClick={handleRightButtonClick}
                >
                    <RiArrowRightWideFill />
                </button>
            </div>

            <div className="slider__content-wrapper">
                <div className="slider__content">
                    <h4>{images[currentImageIndex].content}</h4>
                    <Link className="shop-now--button" href="/admission">
                        Read More
                    </Link>
                </div>
            </div>

            <div className="progress-bar--outer">
                <div className="progress-bar--inner">
                    {images.map((_, index) => {
                        return (
                            <button
                                className={
                                    `progress-bar__candle progress-bar-candle${index}` +
                                    (currentImageIndex === index
                                        ? " progress-bar__candle-active"
                                        : "")
                                }
                                onClick={() => setCurrentImageIndex(index)}
                                key={index}
                            ></button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
