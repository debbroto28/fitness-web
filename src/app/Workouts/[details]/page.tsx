import React from 'react';

import PlanActions from '@/Component/PlanActions';
interface ExerciseDetailsProps {
  params: Promise<{
    details: string;
  }>;
}

const getInfo = async () => {
  const res = await fetch("http://localhost:3000/card.json");
  const data = await res.json();
  return data;
};

const ExerciseDetails = async ({params}: ExerciseDetailsProps) => {
  const { details } = await params;
  const infoData = await getInfo();
  const exercise = infoData.find((card) => String(card.id) === String(details));

  
  
  
    return (
        <div className="container mx-auto py-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#0d0e13] p-1">

    
    <div>
      <img
        src={exercise.image}
        alt={exercise.name}
        className="w-full h-auto rounded-lg"
      />
    </div>

    
    <div className="text-white py-2">

      
      <h1 className="text-3xl font-extrabold uppercase">
        {exercise.name}
      </h1>

      
      <p className="text-gray-400 text-sm leading-6 mt-3">
        {exercise.description}
      </p>

      
      <div className="flex flex-wrap gap-2 mt-4">
        {exercise.muscleGroups.map((muscle, index) => (
          <span
            key={index}
            className="bg-[#C2F800] text-black text-xs font-bold px-3 py-1 rounded-full"
          >
            {muscle}
          </span>
        ))}
      </div>

      
      <div className="bg-[#171820] border border-gray-800 rounded-xl mt-5 overflow-hidden">

        
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
          <span className="text-gray-500 text-xs font-bold uppercase">
            Equipment
          </span>

          <span className="text-gray-200 text-sm">
            {exercise.equipment}
          </span>
        </div>

        
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
          <span className="text-gray-500 text-xs font-bold uppercase">
            Difficulty
          </span>

          <span className="text-gray-200 text-sm">
            {exercise.difficulty}
          </span>
        </div>

        
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
          <span className="text-gray-500 text-xs font-bold uppercase">
            Sets
          </span>

          <span className="text-gray-200 text-sm">
            {exercise.sets}
          </span>
        </div>

        
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
          <span className="text-gray-500 text-xs font-bold uppercase">
            Reps
          </span>

          <span className="text-gray-200 text-sm">
            {exercise.reps}
          </span>
        </div>

        
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
          <span className="text-gray-500 text-xs font-bold uppercase">
            Duration
          </span>

          <span className="text-gray-200 text-sm">
            {exercise.duration} min
          </span>
        </div>

        
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
          <span className="text-gray-500 text-xs font-bold uppercase">
            Calories
          </span>

          <span className="text-gray-200 text-sm">
            {exercise.caloriesBurned} kcal
          </span>
        </div>

        
        <div className="flex justify-between items-center px-4 py-3">
          <span className="text-gray-500 text-xs font-bold uppercase">
            Rating
          </span>

          <span className="text-gray-200 text-sm">
            {exercise.rating}
          </span>
        </div>

      </div>

      
      <div className="mt-6">

        <h2 className="text-lg font-bold uppercase">
          Instructions
        </h2>

        <ol className="mt-4 space-y-3">
          {exercise.instructions.map((instruction, index) => (
            <li
              key={index}
              className="flex gap-3 text-gray-400 text-sm"
            >
              <span className="text-gray-500">
                {index + 1}.
              </span>

              <span>
                {instruction}
              </span>
            </li>
          ))}
        </ol>

      </div>

      
      <div className="flex gap-3 mt-7">

       <PlanActions exercise={exercise} />

      </div>

    </div>
  </div>
</div>
    );
};

export default ExerciseDetails;