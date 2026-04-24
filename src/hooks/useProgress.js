import { useState, useEffect } from 'react'

const STORAGE_KEY = 'ai_learning_progress'

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
    } catch { return {} }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const getModuleProgress = (moduleId) => progress[moduleId] || { currentSlide: 0, completed: false }

  const setModuleSlide = (moduleId, slideIndex) => {
    setProgress(prev => ({
      ...prev,
      [moduleId]: { ...prev[moduleId], currentSlide: slideIndex, completed: false }
    }))
  }

  const completeModule = (moduleId) => {
    setProgress(prev => ({
      ...prev,
      [moduleId]: { ...prev[moduleId], completed: true, completedAt: new Date().toISOString() }
    }))
  }

  const resetModule = (moduleId) => {
    setProgress(prev => ({ ...prev, [moduleId]: { currentSlide: 0, completed: false } }))
  }

  return { progress, getModuleProgress, setModuleSlide, completeModule, resetModule }
}
