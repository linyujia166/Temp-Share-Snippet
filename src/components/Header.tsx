'use client'

import { useState } from 'react'

interface Language {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
]

export default function Header() {
  const [currentLanguage, setCurrentLanguage] = useState<string>('zh')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode)
    setIsDropdownOpen(false)
    // 在这里添加语言切换逻辑
    console.log('Language changed to:', langCode)
  }

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0]

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">TS</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Temp Share</h1>
        </div>

        {/* 语言选择器 */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors bg-white"
          >
            <span className="text-lg">{currentLang.flag}</span>
            <span className="text-sm font-medium text-gray-700">{currentLang.name}</span>
            <svg 
              className={`w-4 h-4 text-gray-600 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                    currentLanguage === lang.code ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                  {currentLanguage === lang.code && (
                    <svg className="w-4 h-4 ml-auto text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
} 