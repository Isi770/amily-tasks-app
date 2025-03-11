import React, { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { User, Key, LogIn } from 'lucide-react';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('children');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // בדיקות בסיסיות בצד הקליינט
    if (!username || !password) {
      setError('אנא מלא את כל השדות');
      return;
    }
    
    // כאן יש להוסיף קריאה ל-API להתחברות
    console.log(`ניסיון התחברות כ${activeTab === 'children' ? 'ילד' : 'הורה'}: ${username}`);
    
    // הדמיה של התחברות מוצלחת
    if (username === 'דוגמה' && password === '1234') {
      setError('');
      alert('התחברות מוצלחת! מעביר לעמוד הראשי...');
    } else {
      setError('שם משתמש או סיסמה שגויים');
    }
  };

  const resetPassword = () => {
    if (!username) {
      setError('אנא הכנס שם משתמש כדי לאפס סיסמה');
      return;
    }
    alert(`קישור לאיפוס סיסמה נשלח לחשבון המקושר למשתמש ${username}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">ברוכים הבאים</h1>
          <p className="text-gray-600">למערכת המשימות המשפחתית</p>
        </div>
        
        {/* טאבים להחלפה בין כניסת ילדים והורים */}
        <div className="flex mb-6 border-b">
          <button 
            className={`flex-1 py-2 text-center ${activeTab === 'children' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('children')}
          >
            כניסת ילדים
          </button>
          <button 
            className={`flex-1 py-2 text-center ${activeTab === 'parents' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('parents')}
          >
            כניסת הורים
          </button>
        </div>
        
        {error && (
          <Alert className="mb-4 bg-red-50 border-red-200 text-red-700">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-right" htmlFor="username">
              שם משתמש
            </label>
            <div className="relative">
              <input
                id="username"
                type="text"
                className="w-full p-2 pr-10 border rounded-lg text-right"
                placeholder="הכנס שם משתמש"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                dir="rtl"
              />
              <User className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-right" htmlFor="password">
              סיסמה
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                className="w-full p-2 pr-10 border rounded-lg text-right"
                placeholder="הכנס סיסמה"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                dir="rtl"
              />
              <Key className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2"
          >
            <LogIn className="h-5 w-5" />
            <span>כניסה</span>
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <button 
            onClick={resetPassword}
            className="text-sm text-blue-600 hover:underline"
          >
            שכחתי סיסמה
          </button>
        </div>
      </div>

      {/* הערה תחתונה - במימוש אמיתי יהיה קישור להרשמה */}
      <p className="mt-8 text-sm text-gray-500">
        אין לך חשבון? פנה להורה כדי שיצור עבורך חשבון חדש
      </p>
    </div>
  );
};

export default LoginPage;
