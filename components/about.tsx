"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sop");

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] text-center leading-8 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="sop"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        ตั้งแต่เด็ก ผมมีความสนใจอย่างลึกซึ้งในเทคโนโลยี เริ่มต้นจากการเล่นเกมส์
        คอมพิวเตอร์ในร้านเกมเหมือนกับเด็กทั่วไป
        จนกระทั่งตอนที่ผมมีคอมพิวเตอร์เป็นของ ตัวเอง
        ความหลงใหลในการสำรวจโลกของเทคโนโลยีของผมมันก็เริ่มเติบโตขึ้นเรื่อยๆ
        ผมเริ่มศึกษาในหลากหลายด้าน เช่น การ Coding , Editing และ Design ในช่วง
        ม.1 ซึ่งสิ่งเหล่านี้ทำให้ผมเข้าใจว่าเทคโนโลยีไม่เพียงแต่เป็นเครื่องมือ
        แต่ยังเป็นช่องทางที่ ช่วยให้เราสร้างสรรค์สิ่งใหม่ๆ ได้ตามที่ใจเราวาดไว้
      </p>

      <p>
        เมื่อผมเข้าสู่มัธยมปลาย ผมเริ่มต้นการเดินทางในสายเทคโนโลยีด้วยการเข้า
        ร่วมการแข่งขัน โดยการแข่งครั้งแรกของผมคือการแข่งขัน Motion Graphic
        ซึ่งผมได้ ลำดับที่ 5 จากโรงเรียนทั่วกรุงเทพฯ
        แม้ว่าผมจะภูมิใจในผลลัพธ์นี้ แต่ผมกลับรู้สึกว่ายัง
        ไม่พบสิ่งที่ตรงกับความสนใจของตัวเอง
        จุดเปลี่ยนของผมเกิดขึ้นเมื่อผมได้เข้าร่วมค่าย <span className="font-bold"> TobeIT’67 The Second </span>และ
        <span className="font-bold"> ITCAMP 20</span> ซึ่งนี่ทำให้ผมค้นพบว่าเส้นทางที่ผมชอบ มากที่สุดคือการ Coding
        และ Web Development ผมรู้สึกทึ่งที่สามารถสร้างทุกอย่าง
        ที่อยู่ในจินตนาการได้ด้วยมือของตัวเอง
        การเขียนโปรแกรมเป็นเครื่องมือที่ช่วยให้ผม
        สามารถทำให้ไอเดียกลายเป็นจริงได้
        สิ่งนี้เป็นแรงบันดาลใจและเป็นแรงผลักดันที่ทำให้ผมเลือกศึกษาต่อใน {""}
         <span className="font-bold underline">คณะไอทีลาดกระบัง</span>
      </p>
    </motion.section>
  );
}
