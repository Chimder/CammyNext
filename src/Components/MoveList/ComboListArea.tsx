import { useEffect, useState } from "react";
import s from "./Combo.module.scss";
import { CharactersTypes } from "@/shared/Api/axios-api";
import Combos from "./Combos";

export function ComboListArea(combo: CharactersTypes) {
  const [comboVid, setComboVid] = useState<string>();
  const [comboPod, setComboPod] = useState<string | undefined>();

  useEffect(() => {
    setComboPod(combo?.video[0]?.comboName);
    setComboVid(combo?.video[0]?.video);
  }, [combo]);

  const handleClick = (data: React.MouseEvent<HTMLLIElement>) => {
    const target = data.target as HTMLElement;
    try {
      const { video }: any = combo.video?.find(
        (video) => video.comboName == target.innerText
      );
      setComboVid(video);
      setComboPod(target.innerText);
    } catch (error) {
      console.log("Dont click on energy");
    }
  };

  const [videoStatus, setVideoStatus] = useState<number | unknown>();

  const changeVideoFix = () => {
    if (window.scrollY <= 480) {
      setVideoStatus(1);
    } else if (window.scrollY >= 4000) {
      setVideoStatus(3);
    } else {
      setVideoStatus(2);
    }
  };

  useEffect(() => {
    changeVideoFix();
    window.addEventListener("scroll", changeVideoFix);

    return window.removeEventListener("scroll", changeVideoFix);
  });

  return (
    <div className={s.SectionComboInto}>
      <div className={s.moveList_area}>
        <h4 className={s.moveList_h}>Special Moves</h4>
        <ul className={s.moveList_ul}>
          {combo.special?.map((data, index) => {
            return (
              <Combos
                {...data}
                key={index}
                podsvet={comboPod}
                click={handleClick}
              />
            );
          })}
        </ul>

        <h4 className={s.moveList_h}>Super Arts</h4>
        <ul className={s.moveList_ul}>
          {combo.supel?.map((data, index) => {
            return (
              <Combos
                {...data}
                key={index}
                podsvet={comboPod}
                click={handleClick}
              />
            );
          })}
        </ul>

        <h4 className={s.moveList_h}>Unique Attacks</h4>
        <ul className={s.moveList_ul}>
          {combo.unique?.map((data, index) => {
            return (
              <Combos
                {...data}
                key={index}
                podsvet={comboPod}
                click={handleClick}
              />
            );
          })}
        </ul>
        <h4 className={s.moveList_h}>Throws</h4>
        <ul className={s.moveList_ul}>
          {combo.throws?.map((data, index) => {
            return (
              <Combos
                {...data}
                key={index}
                podsvet={comboPod}
                click={handleClick}
              />
            );
          })}
        </ul>
        <h4 className={s.moveList_h}>Common Moves</h4>
        <ul className={s.moveList_ul}>
          {combo.common?.map((data, index) => {
            return (
              <Combos
                {...data}
                key={index}
                podsvet={comboPod}
                click={handleClick}
              />
            );
          })}
        </ul>
      </div>
      <div
        className={
          videoStatus == 1
            ? s.moveList_video
            : videoStatus == 2
            ? s.moveList_video_fix
            : s.moveList_video_fix_end
        }
      >
        <div className={s.video_inner}>
          <div className={s.moveList_video_box}>
            <div className={s.moveList_video_box_inner}>
              <p className={s.moveList_skills_video_box}>
                {combo?.video && (
                  <video
                    src={comboVid}
                    autoPlay
                    loop
                    playsInline
                    className={s.moveList_skill_video}
                  ></video>
                )}
              </p>
            </div>
          </div>
          <div className={s.moveList_video_text}>
            <div className={s.moveList_video_text_inner}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
