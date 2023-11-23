import React from 'react';
import cl from './styles.module.scss';

const Benefits = () => {
  return (
    <section className={cl.section}>
      <h1 className={cl.title}>About</h1>
      <p className={cl.lead}>The game "Count Sheep" provides benefits for development in several aspects:</p>
      <ul className={cl.list}>
        <li className={cl.item}><strong>Attention and Concentration.</strong> Counting sheep for a short period of time requires the
          player's high level of attention and concentration. This helps train the ability to focus attention on a
          specific task within a limited timeframe.
        </li>
        <li className={cl.item}><strong>Quick Thinking.</strong> The gradual increase in speed and the number of sheep presents the player
          with a challenge of quick thinking and reaction. This contributes to training the mind at higher speeds of
          information processing.
        </li>
        <li className={cl.item}><strong>Visual Perception and Information Processing.</strong> Counting sheep also involves visual
          perception and rapid information processing. The game contributes to the development of the ability to
          efficiently process and analyze visual data.
        </li>
        <li className={cl.item}><strong>Memory.</strong> For successful sheep counting and selecting the correct answer, the player must
          utilize their short-term memory. This contributes to memory training and improvement of the ability to quickly
          memorize information.
        </li>
        <li className={cl.item}><strong>Strategic Thinking.</strong> Depending on how the game becomes more challenging, the player can
          develop strategies for effective sheep counting. This promotes the development of strategic thinking and the
          ability to make quick decisions.
        </li>
        <li className={cl.item}><strong>Stress Resilience.</strong> The gradual complexity of the game can help the player improve their
          stress resilience as they face increasing challenges and pressure.
        </li>
      </ul>
    </section>
  );
};

export default Benefits;