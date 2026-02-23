import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CheckCircle, Flag } from "lucide-react";

const tests = [
  { id: 1, name: "SSC Mock 1", questions: 20, duration: 15 },
  { id: 2, name: "Banking Prelims", questions: 15, duration: 10 },
];

const generateQuestions = (num) =>
  Array.from({ length: num }, (_, i) => ({
    id: i + 1,
    question: `Question ${i + 1}: Choose the correct option.`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option A",
  }));

export default function TestPage() {
  const { testId } = useParams();
  const navigate = useNavigate();

  const test = tests.find((t) => t.id === parseInt(testId));
  const [questions] = useState(generateQuestions(test.questions));
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(test.duration * 60);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [marked, setMarked] = useState(Array(questions.length).fill(false));

  // Request fullscreen on test start
  useEffect(() => {
    const enterFullScreen = () => {
      const el = document.documentElement;
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      else if (el.msRequestFullscreen) el.msRequestFullscreen();
    };
    enterFullScreen();
  }, []);

  // Detect if user switches tab / minimizes
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        alert("You switched tab or minimized the window! Test will be submitted.");
        navigate("/tests");
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [navigate]);

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Time's up!");
      navigate("/tests");
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const selectOption = (opt) => {
    const updated = [...answers];
    updated[currentQIndex] = opt;
    setAnswers(updated);
  };

  const toggleMark = () => {
    const updated = [...marked];
    updated[currentQIndex] = !updated[currentQIndex];
    setMarked(updated);
  };

  const nextQuestion = () => {
    if (currentQIndex < questions.length - 1) setCurrentQIndex((i) => i + 1);
  };
  const prevQuestion = () => {
    if (currentQIndex > 0) setCurrentQIndex((i) => i - 1);
  };
  const finishTest = () => {
    alert("Test Submitted!");
    navigate("/tests");
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const q = questions[currentQIndex];
  const progress = ((currentQIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">{test.name}</h1>
          <p className="text-sm text-gray-500">
            Question {currentQIndex + 1} of {questions.length}
          </p>
        </div>
        <div
          className={`font-semibold text-lg px-4 py-1 rounded ${
            timeLeft <= 30 ? "bg-red-100 text-red-600 animate-pulse" : "bg-gray-100"
          }`}
        >
          ⏱ {formatTime(timeLeft)}
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 max-w-6xl mx-auto flex flex-col md:flex-row gap-6 px-4">
        {/* Question Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
          <p className="text-lg font-medium mb-4">{q.question}</p>

          <div className="space-y-3">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => selectOption(opt)}
                className={`w-full text-left px-4 py-3 rounded-lg border flex items-center gap-3 transition
                  ${answers[currentQIndex] === opt
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                    : "bg-gray-100 hover:bg-indigo-50"}`}
              >
                {answers[currentQIndex] === opt && (
                  <CheckCircle className="text-white w-5 h-5" />
                )}
                {opt}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <div>
              <button
                onClick={prevQuestion}
                disabled={currentQIndex === 0}
                className={`px-6 py-3 rounded-lg border ${
                  currentQIndex === 0
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                }`}
              >
                Previous
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleMark}
                className={`px-4 py-2 rounded-lg border flex items-center gap-2 ${
                  marked[currentQIndex]
                    ? "bg-yellow-400 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-yellow-100"
                }`}
              >
                <Flag className="w-4 h-4" /> {marked[currentQIndex] ? "Marked" : "Mark"}
              </button>

              {currentQIndex === questions.length - 1 ? (
                <button
                  onClick={finishTest}
                  className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700"
                >
                  Finish
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Question Navigator */}
        <div className="w-32 flex flex-wrap gap-2">
          {questions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentQIndex(idx)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition
                ${currentQIndex === idx
                  ? "bg-indigo-600 text-white"
                  : marked[idx]
                  ? "bg-yellow-400 text-white"
                  : answers[idx]
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Progress */}
      <div className="fixed bottom-0 left-0 w-full h-2 bg-gray-300">
        <div
          className="h-2 bg-indigo-600 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}