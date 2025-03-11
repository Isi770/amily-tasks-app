import React, { useState } from 'react';
import { 
  Users, Settings, Bell, Plus, Edit, Trash2, Award, CheckSquare,
  BarChart2, Calendar, Search, User, LogOut 
} from 'lucide-react';

const ParentDashboard = () => {
  // השתמש בסיידבר לניווט
  const Sidebar = () => (
    <div className="bg-blue-800 text-white w-16 md:w-64 flex flex-col h-screen fixed">
      <div className="p-4 mb-6 hidden md:block">
        <h2 className="text-xl font-bold text-right">פאנל ניהול</h2>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1">
          <li>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center w-full p-3 ${activeTab === 'dashboard' ? 'bg-blue-700 border-r-4 border-yellow-400' : 'hover:bg-blue-700'}`}
            >
              <BarChart2 className="h-5 w-5 md:mr-3" />
              <span className="hidden md:inline text-right w-full">סיכום פעילות</span>
            </button>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 mt-auto">
        <button className="flex items-center text-red-200 hover:text-white w-full">
          <LogOut className="h-5 w-5 md:mr-3" />
          <span className="hidden md:inline text-right w-full">התנתקות</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 overflow-auto ml-16 md:ml-64">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center">
              <Bell className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">פאנל ניהול הורים</h1>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
          <li>
            <button 
              onClick={() => setActiveTab('children')}
              className={`flex items-center w-full p-3 ${activeTab === 'children' ? 'bg-blue-700 border-r-4 border-yellow-400' : 'hover:bg-blue-700'}`}
            >
              <Users className="h-5 w-5 md:mr-3" />
              <span className="hidden md:inline text-right w-full">ניהול ילדים</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('tasks')}
              className={`flex items-center w-full p-3 ${activeTab === 'tasks' ? 'bg-blue-700 border-r-4 border-yellow-400' : 'hover:bg-blue-700'}`}
            >
              <CheckSquare className="h-5 w-5 md:mr-3" />
              <span className="hidden md:inline text-right w-full">ניהול משימות</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('rewards')}
              className={`flex items-center w-full p-3 ${activeTab === 'rewards' ? 'bg-blue-700 border-r-4 border-yellow-400' : 'hover:bg-blue-700'}`}
            >
              <Award className="h-5 w-5 md:mr-3" />
              <span className="hidden md:inline text-right w-full">ניהול פרסים</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`flex items-center w-full p-3 ${activeTab === 'settings' ? 'bg-blue-700 border-r-4 border-yellow-400' : 'hover:bg-blue-700'}`}
            >
              <Settings className="h-5 w-5 md:mr-3" />
              <span className="hidden md:inline text-right w-full">הגדרות</span>
            </button>
          </li>
  // נתוני דוגמה למערכת
  const [children, setChildren] = useState([
    { 
      id: 1, 
      name: "נועם", 
      age: 10, 
      points: 145, 
      avatarUrl: "/api/placeholder/80/80", 
      tasksCompleted: 12, 
      tasksTotal: 20,
      lastActivity: "לפני שעה"
    },
    { 
      id: 2, 
      name: "מיכל", 
      age: 8, 
      points: 92, 
      avatarUrl: "/api/placeholder/80/80", 
      tasksCompleted: 8, 
      tasksTotal: 15,
      lastActivity: "לפני 3 שעות"
    },
    { 
      id: 3, 
      name: "יובל", 
      age: 12, 
      points: 210, 
      avatarUrl: "/api/placeholder/80/80", 
      tasksCompleted: 18, 
      tasksTotal: 25,
      lastActivity: "לפני 30 דקות"
    }
  ]        );
      
      case 'edit-child':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-right">
              {editingChild && editingChild.id && children.some(c => c.id === editingChild.id) ? 'עריכת פרופיל ילד' : 'הוספת ילד חדש'}
            </h2>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6 flex flex-col items-center">
                <img 
                  src={editingChild?.avatarUrl || "/api/placeholder/150/150"} 
                  alt="תמונת פרופיל"
                  className="h-24 w-24 rounded-full object-cover border-4 border-blue-200"
                />
                <button className="mt-2 text-sm text-blue-600 hover:underline">
                  שנה תמונה
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-right" htmlFor="child-name">
                    שם הילד
                  </label>
                  <input
                    type="text"
                    id="child-name"
                    className="w-full p-2 border rounded-md text-right"
                    value={editingChild?.name || ''}
                    onChange={(e) => setEditingChild({...editingChild, name: e.target.value})}
                    dir="rtl"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-right" htmlFor="child-age">
                    גיל
                  </label>
                  <input
                    type="number"
                    id="child-age"
                    min="1"
                    className="w-full p-2 border rounded-md text-right"
                    value={editingChild?.age || 0}
                    onChange={(e) => setEditingChild({...editingChild, age: parseInt(e.target.value) || 0})}
                    dir="rtl"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-right" htmlFor="child-username">
                      שם משתמש
                    </label>
                    <input
                      type="text"
                      id="child-username"
                      className="w-full p-2 border rounded-md text-right"
                      placeholder="שם משתמש לכניסה למערכת"
                      dir="rtl"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-right" htmlFor="child-password">
                      סיסמה
                    </label>
                    <input
                      type="password"
                      id="child-password"
                      className="w-full p-2 border rounded-md text-right"
                      placeholder="סיסמה לכניסה למערכת"
                      dir="rtl"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-4 rtl:space-x-reverse">
                <button
                  onClick={() => {
                    setEditingChild(null);
                    setActiveTab('children');
                  }}
                  className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  ביטול
                </button>
                <button
                  onClick={saveChild}
                  className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  שמור
                </button>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
      
      case 'rewards':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={addNewReward}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center"
              >
                <Plus className="h-5 w-5 ml-1" />
                <span>הוסף פרס חדש</span>
              </button>
              <h2 className="text-2xl font-bold">ניהול פרסים</h2>
            </div>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">שם הפרס</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">נקודות נדרשות</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">זמין ל</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">פעולות</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {rewards.map(reward => (
                    <tr key={reward.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {reward.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {reward.points}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex -space-x-2 rtl:space-x-reverse">
                          {reward.availableTo.map(childId => {
                            const child = children.find(c => c.id === childId);
                            return child ? (
                              <img 
                                key={childId}
                                className="h-8 w-8 rounded-full border-2 border-white" 
                                src={child.avatarUrl} 
                                alt={child.name}
                                title={child.name}
                              />
                            ) : null;
                          })}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button 
                          onClick={() => editReward(reward)}
                          className="text-indigo-600 hover:text-indigo-900 mr-2"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => deleteReward(reward.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
        
      case 'edit-task':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-right">
              {editingTask && editingTask.id && tasks.some(t => t.id === editingTask.id) ? 'עריכת משימה' : 'הוספת משימה חדשה'}
            </h2>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-right" htmlFor="task-name">
                    שם המשימה
                  </label>
                  <input
                    type="text"
                    id="task-name"
                    className="w-full p-2 border rounded-md text-right"
                    value={editingTask?.name || ''}
                    onChange={(e) => setEditingTask({...editingTask, name: e.target.value})}
                    dir="rtl"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-right" htmlFor="task-points">
                    נקודות
                  </label>
                  <input
                    type="number"
                    id="task-points"
                    min="1"
                    className="w-full p-2 border rounded-md text-right"
                    value={editingTask?.points || 0}
                    onChange={(e) => setEditingTask({...editingTask, points: parseInt(e.target.value) || 0})}
                    dir="rtl"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-right" htmlFor="task-frequency">
                    תדירות
                  </label>
                  <select
                    id="task-frequency"
                    className="w-full p-2 border rounded-md text-right"
                    value={editingTask?.frequency || 'יומי'}
                    onChange={(e) => setEditingTask({...editingTask, frequency: e.target.value})}
                    dir="rtl"
                  >
                    <option value="יומי">יומי</option>
                    <option value="שבועי">שבועי</option>
                    <option value="חודשי">חודשי</option>
                    <option value="חד פעמי">חד פעמי</option>
                  </select>
                </div>
                
                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-1 text-right">
                    הקצה לילדים
                  </p>
                  <div className="space-y-2">
                    {children.map(child => (
                      <div key={child.id} className="flex items-center justify-end">
                        <label className="mr-2 text-sm text-gray-700" htmlFor={`child-${child.id}`}>
                          {child.name}
                        </label>
                        <input
                          type="checkbox"
                          id={`child-${child.id}`}
                          checked={editingTask?.assignedTo?.includes(child.id) || false}
                          onChange={(e) => {
                            const assignedTo = editingTask?.assignedTo || [];
                            if (e.target.checked) {
                              setEditingTask({...editingTask, assignedTo: [...assignedTo, child.id]});
                            } else {
                              setEditingTask({...editingTask, assignedTo: assignedTo.filter(id => id !== child.id)});
                            }
                          }}
                          className="h-4 w-4 rounded border-gray-300 ml-3"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-4 rtl:space-x-reverse">
                <button
                  onClick={() => {
                    setEditingTask(null);
                    setActiveTab('tasks');
                  }}
                  className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  ביטול
                </button>
                <button
                  onClick={saveTask}
                  className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  שמור
                </button>
              </div>
            </div>
          </div>
        );

      case 'edit-reward':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-right">
              {editingReward && editingReward.id && rewards.some(r => r.id === editingReward.id) ? 'עריכת פרס' : 'הוספת פרס חדש'}
            </h2>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-right" htmlFor="reward-name">
                    שם הפרס
                  </label>
                  <input
                    type="text"
                    id="reward-name"
                    className="w-full p-2 border rounded-md text-right"
                    value={editingReward?.name || ''}
                    onChange={(e) => setEditingReward({...editingReward, name: e.target.value})}
                    dir="rtl"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-right" htmlFor="reward-points">
                    נקודות נדרשות
                  </label>
                  <input
                    type="number"
                    id="reward-points"
                    min="1"
                    className="w-full p-2 border rounded-md text-right"
                    value={editingReward?.points || 0}
                    onChange={(e) => setEditingReward({...editingReward, points: parseInt(e.target.value) || 0})}
                    dir="rtl"
                  />
                </div>
                
                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-1 text-right">
                    זמין לילדים
                  </p>
                  <div className="space-y-2">
                    {children.map(child => (
                      <div key={child.id} className="flex items-center justify-end">
                        <label className="mr-2 text-sm text-gray-700" htmlFor={`reward-child-${child.id}`}>
                          {child.name}
                        </label>
                        <input
                          type="checkbox"
                          id={`reward-child-${child.id}`}
                          checked={editingReward?.availableTo?.includes(child.id) || false}
                          onChange={(e) => {
                            const availableTo = editingReward?.availableTo || [];
                            if (e.target.checked) {
                              setEditingReward({...editingReward, availableTo: [...availableTo, child.id]});
                            } else {
                              setEditingReward({...editingReward, availableTo: availableTo.filter(id => id !== child.id)});
                            }
                          }}
                          className="h-4 w-4 rounded border-gray-300 ml-3"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-4 rtl:space-x-reverse">
                <button
                  onClick={() => {
                    setEditingReward(null);
                    setActiveTab('rewards');
                  }}
                  className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  ביטול
                </button>
                <button
                  onClick={saveReward}
                  className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  שמור
                </button>
              </div>
            </div>
          </div>
        );
  
  const [tasks, setTasks] = useState([
    { id: 1, name: "קימה בזמן בבוקר", points: 10, frequency: "יומי", assignedTo: [1, 2, 3] },
    { id: 2, name: "צחצוח שיניים", points: 5, frequency: "יומי", assignedTo: [1, 2, 3] },
    { id: 3, name: "סידור החדר", points: 15, frequency: "יומי", assignedTo: [1, 2, 3] },
    { id: 4, name: "הכנת שיעורי בית", points: 20, frequency: "יומי", assignedTo: [1, 3] },
    { id: 5, name: "עזרה לאחים", points: 25, frequency: "שבועי", assignedTo: [3] }
  ]);
  
  const [rewards, setRewards] = useState([
    { id: 1, name: "סרט בקולנוע", points: 150, availableTo: [1, 2, 3] },
    { id: 2, name: "ארטיק", points: 50, availableTo: [1, 2, 3] },
    { id: 3, name: "משחק חדש", points: 300, availableTo: [1, 3] },
    { id: 4, name: "שעה נוספת של מחשב", points: 100, availableTo: [3] }
  ]);

  // מצב עריכה
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingTask, setEditingTask] = useState(null);
  const [editingReward, setEditingReward] = useState(null);
  const [editingChild, setEditingChild] = useState(null);
  
  // פונקציות ניהול
  const deleteTask = (taskId) => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק משימה זו?')) {
      setTasks(tasks.filter(task => task.id !== taskId));
    }
  };
  
  const deleteReward = (rewardId) => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק פרס זה?')) {
      setRewards(rewards.filter(reward => reward.id !== rewardId));
    }
  };
  
  const editTask = (task) => {
    setEditingTask({...task});
    setActiveTab('edit-task');
  };
  
  const editReward = (reward) => {
    setEditingReward({...reward});
    setActiveTab('edit-reward');
  };
  
  const editChild = (child) => {
    setEditingChild({...child});
    setActiveTab('edit-child');
  };
  
  const addNewTask = () => {
    setEditingTask({
      id: Math.max(...tasks.map(t => t.id), 0) + 1,
      name: "",
      points: 10,
      frequency: "יומי",
      assignedTo: []
    });
    setActiveTab('edit-task');
  };
  
  const addNewReward = () => {
    setEditingReward({
      id: Math.max(...rewards.map(r => r.id), 0) + 1,
      name: "",
      points: 50,
      availableTo: []
    });
    setActiveTab('edit-reward');
  };
  
  const addNewChild = () => {
    setEditingChild({
      id: Math.max(...children.map(c => c.id), 0) + 1,
      name: "",
      age: 8,
      points: 0,
      avatarUrl: "/api/placeholder/80/80",
      tasksCompleted: 0,
      tasksTotal: 0,
      lastActivity: "עכשיו"
    });
    setActiveTab('edit-child');
  };
  
  const saveTask = () => {
    if (editingTask.name.trim() === '') {
      alert('אנא הזן שם למשימה');
      return;
    }
    
    if (tasks.some(t => t.id === editingTask.id)) {
      setTasks(tasks.map(t => t.id === editingTask.id ? editingTask : t));
    } else {
      setTasks([...tasks, editingTask]);
    }
    
    setActiveTab('tasks');
    setEditingTask(null);
  };
  
  const saveReward = () => {
    if (editingReward.name.trim() === '') {
      alert('אנא הזן שם לפרס');
      return;
    }
    
    if (rewards.some(r => r.id === editingReward.id)) {
      setRewards(rewards.map(r => r.id === editingReward.id ? editingReward : r));
    } else {
      setRewards([...rewards, editingReward]);
    }
    
    setActiveTab('rewards');
    setEditingReward(null);
  };
  
  const saveChild = () => {
    if (editingChild.name.trim() === '') {
      alert('אנא הזן שם לילד');
      return;
    }
    
    if (children.some(c => c.id === editingChild.id)) {
      setChildren(children.map(c => c.id === editingChild.id ? editingChild : c));
    } else {
      setChildren([...children, editingChild]);
    }
    
    setActiveTab('children');
    setEditingChild(null);
  };

  // הצג תוכן לפי הטאב הפעיל
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-right">סיכום פעילות</h2>
            
            {/* סיכום נתונים */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <Users className="h-8 w-8 text-blue-500" />
                  <div className="text-right">
                    <p className="text-gray-600 text-sm">סה"כ ילדים</p>
                    <p className="text-2xl font-bold">{children.length}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <CheckSquare className="h-8 w-8 text-green-500" />
                  <div className="text-right">
                    <p className="text-gray-600 text-sm">משימות שהושלמו</p>
                    <p className="text-2xl font-bold">
                      {children.reduce((sum, child) => sum + child.tasksCompleted, 0)} / {children.reduce((sum, child) => sum + child.tasksTotal, 0)}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <Award className="h-8 w-8 text-yellow-500" />
                  <div className="text-right">
                    <p className="text-gray-600 text-sm">פרסים שחולקו</p>
                    <p className="text-2xl font-bold">8</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* משתמשים אחרונים */}
            <h3 className="text-lg font-semibold mb-3 text-right">פעילות אחרונה</h3>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">שם</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">נקודות</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">פעילות אחרונה</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">התקדמות</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">פעולות</th>
                  </tr>