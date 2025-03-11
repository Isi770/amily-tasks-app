import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Trophy, Calendar, Clock, CheckCircle, Star, AlertCircle } from 'lucide-react';

const ChildProfile = () => {
  // נתוני דוגמה לפרופיל ילד
  const [childData, setChildData] = useState({
    name: "נועם",
    points: 145,
    level: "מתקדם",
    avatarUrl: "/api/placeholder/150/150",
    tasks: [
      { id: 1, name: "קימה בזמן בבוקר", points: 10, completed: true, time: "07:00" },
      { id: 2, name: "צחצוח שיניים", points: 5, completed: true, time: "07:15" },
      { id: 3, name: "סידור החדר", points: 15, completed: false, time: "16:00" },
      { id: 4, name: "הכנת שיעורי בית", points: 20, completed: false, time: "17:00" },
      { id: 5, name: "עזרה לאחות הקטנה", points: 25, completed: false, time: "18:30" },
    ],
    rewards: [
      { id: 1, name: "סרט בקולנוע", points: 150, claimed: false },
      { id: 2, name: "ארטיק", points: 50, claimed: true },
      { id: 3, name: "משחק חדש", points: 300, claimed: false },
    ],
    progressData: [
      { day: "יום א'", points: 45 },
      { day: "יום ב'", points: 30 },
      { day: "יום ג'", points: 25 },
      { day: "יום ד'", points: 15 },
      { day: "יום ה'", points: 20 },
      { day: "יום ו'", points: 10 },
      { day: "שבת", points: 0 },
    ]
  });

  // פונקציה להשלמת משימה
  const completeTask = (taskId) => {
    setChildData(prevData => {
      const updatedTasks = prevData.tasks.map(task => 
        task.id === taskId ? { ...task, completed: true } : task
      );
      
      // חישוב הנקודות החדש
      const completedTask = prevData.tasks.find(task => task.id === taskId);
      const newPoints = prevData.points + (completedTask && !completedTask.completed ? completedTask.points : 0);
      
      return {
        ...prevData,
        tasks: updatedTasks,
        points: newPoints
      };
    });
  };

  // פונקציה לדרישת פרס
  const claimReward = (rewardId) => {
    setChildData(prevData => {
      const reward = prevData.rewards.find(r => r.id === rewardId);
      
      // בדיקה שיש מספיק נקודות
      if (!reward || reward.claimed || prevData.points < reward.points) {
        return prevData;
      }
      
      const updatedRewards = prevData.rewards.map(r => 
        r.id === rewardId ? { ...r, claimed: true } : r
      );
      
      return {
        ...prevData,
        rewards: updatedRewards,
        points: prevData.points - reward.points
      };
    });
  };

  // התאריך של היום
  const today = new Date().toLocaleDateString('he-IL', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-blue-50 py-8 px-4">
      {/* כותרת עליונה */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row items-center">
          <img src={childData.avatarUrl} alt={childData.name} className="rounded-full w-24 h-24 border-4 border-blue-500 mb-4 md:mb-0 md:mr-6" />
          <div className="text-center md:text-right">
            <h1 className="text-3xl font-bold text-gray-800">שלום, {childData.name}!</h1>
            <p className="text-gray-600">{today}</p>
            <div className="mt-2 flex items-center justify-center md:justify-start">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <span className="text-lg font-bold text-blue-600">{childData.points} נקודות</span>
              <span className="text-sm text-gray-500 mx-2">•</span>
              <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded-full">רמה: {childData.level}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* משימות של היום */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10"></div> {/* ריווח לצורכי יישור */}
            <h2 className="text-xl font-bold text-center">המשימות שלי להיום</h2>
            <Calendar className="h-6 w-6 text-blue-500" />
          </div>
          
          <div className="space-y-3">
            {childData.tasks.map(task => (
              <div key={task.id} className={`border rounded-lg p-4 flex items-center justify-between ${task.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
                <button 
                  onClick={() => completeTask(task.id)}
                  disabled={task.completed}
                  className={`p-2 rounded-full ${task.completed ? 'bg-green-100 text-green-500 cursor-default' : 'bg-blue-100 text-blue-500 hover:bg-blue-200'}`}
                >
                  {task.completed ? <CheckCircle className="h-6 w-6" /> : <CheckCircle className="h-6 w-6" />}
                </button>
                
                <div className="flex-1 text-right mx-4">
                  <h3 className={`font-medium ${task.completed ? 'text-green-700' : 'text-gray-800'}`}>{task.name}</h3>
                  <div className="flex items-center justify-end text-sm text-gray-500">
                    <span>{task.points} נקודות</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 inline mr-1" />
                    <span>עד {task.time}</span>
                  </div>
                </div>
                
                <div className={`w-3 h-12 rounded-full ${task.completed ? 'bg-green-500' : 'bg-gray-200'}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* הפרסים שאפשר לקבל */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-6"></div> {/* ריווח לצורכי יישור */}
            <h2 className="text-xl font-bold text-center">הפרסים שלי</h2>
            <Trophy className="h-6 w-6 text-yellow-500" />
          </div>
          
          <div className="space-y-3">
            {childData.rewards.map(reward => (
              <div key={reward.id} className={`border rounded-lg p-3 ${reward.claimed ? 'bg-gray-50 border-gray-200' : 'bg-white border-yellow-200'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium px-2 py-0.5 rounded-full ${reward.claimed ? 'bg-gray-200 text-gray-700' : 'bg-yellow-100 text-yellow-800'}`}>
                    {reward.points} נקודות
                  </span>
                  <h3 className={`font-medium ${reward.claimed ? 'text-gray-500' : 'text-gray-800'}`}>{reward.name}</h3>
                </div>
                
                <button
                  onClick={() => claimReward(reward.id)}
                  disabled={reward.claimed || childData.points < reward.points}
                  className={`w-full mt-2 py-1.5 rounded-md text-sm font-medium ${
                    reward.claimed 
                      ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                      : childData.points >= reward.points 
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                        : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {reward.claimed ? 'התקבל' : childData.points >= reward.points ? 'קבל פרס' : 'אין מספיק נקודות'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* גרף התקדמות */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mt-6">
        <h2 className="text-xl font-bold mb-4 text-center">התקדמות שבועית</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={childData.progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="points" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ stroke: '#3b82f6', strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ stroke: '#3b82f6', strokeWidth: 2, r: 6, fill: '#3b82f6' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChildProfile;
