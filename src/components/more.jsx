function More() {
    return (
        <div className="md:container md:mx-auto my-1 md:my-5 min-h-[100vh] md:min-h-[80vh] md:w-1/2 bg-violet-200 p-6 rounded-xl shadow-2xl border border-gray-200">
            <div className="flex flex-col items-center text-indigo-700">
                <h1 className="text-3xl font-bold font-serif mb-2 italic">Todox</h1>
                <p className="text-sm text-gray-500 mb-6">Your Task Planner</p>
            </div>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-indigo-800 mb-2">About Todox</h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                    Todox is a sleek and intuitive task management web app designed to help you organize your day with clarity and confidence.
                    Built for everyday use, Todox keeps your goals in focus and your productivity on track.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-indigo-800 mb-2">Key Features</h2>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                    <li>Minimalist and responsive interface</li>
                    <li>Quick task creation and deletion</li>
                    <li>Progressive Web App (PWA) ready for mobile installation</li>
                    <li>Focused on speed, simplicity, and ease of use</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-indigo-800 mb-2">Install as App</h2>
                <p className="text-sm text-gray-700 mb-2">
                    You can install Todox on your mobile device for quick access:
                </p>
                <ol className="list-decimal ml-5 text-sm text-gray-700 space-y-1">
                    <li>Open Todox in your mobile browser</li>
                    <li>Tap the menu icon (three dots or share arrow)</li>
                    <li>Select <span className="italic">"Add to Home Screen"</span></li>
                    <li>Confirm to place the app icon on your screen</li>
                </ol>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-indigo-800 mb-2">Contact</h2>
                <p className="text-sm text-gray-700 mb-3">
                    We’d love to hear from you! Reach out for questions, feedback, or suggestions:
                </p>
                <div className="text-sm text-gray-700 space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="font-medium">📧 Email:</span>
                        <a href="mailto:connectmuhiudin@gmail.com" className="text-indigo-700 hover:underline">connectmuhiudin@gmail.com</a>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="font-medium">💼 LinkedIn:</span>
                        <a href="https://www.linkedin.com/in/muhiu-din/" className="text-indigo-700 hover:underline">muhiu_din</a>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="font-medium">💻 GitHub:</span>
                        <a href="https://github.com/muhiu-din" className="text-indigo-700 hover:underline">muhiu-din</a>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="font-medium">📱 WhatsApp:</span>
                        <a href="https://wa.me/923394199501" className="text-indigo-700 hover:underline">+92 339 4199501</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default More;
