
'use client';

import { Exercise, usePlan } from '@/Component/PlanContext';

const PlanActions = ({ exercise }: { exercise: Exercise }) => {
  const { todayPlan, savedPlan, addToToday, saveForLater } = usePlan();

  const isAdded = todayPlan.some((item) => item.id === exercise.id);
  const isSaved = savedPlan.some((item) => item.id === exercise.id);

  return (
    <div className="flex flex-wrap gap-3 mt-7">
      <button
        onClick={() => addToToday(exercise)}
        disabled={isAdded}
        className="bg-[#C2F800] text-black px-5 py-3 rounded-lg font-semibold text-sm disabled:opacity-50"
      >
        {isAdded ? '✓ Added to Today’s Plan' : "+ Add to today's plan"}
      </button>

      <button
        onClick={() => saveForLater(exercise)}
        disabled={isSaved}
        className="border border-gray-700 text-gray-300 px-5 py-3 rounded-lg font-semibold text-sm disabled:opacity-50"
      >
        {isSaved ? '♥ Saved' : '♡ Save for later'}
      </button>
    </div>
  );
};

export default PlanActions;