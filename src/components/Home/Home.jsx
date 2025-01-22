

export default function Home() {
  return (
    <div className='md:w-4/5 w-11/12 mx-auto'>
      {/* Top Banner */}
      <div className="flex md:flex-col flex-col-reverse">
        <div className="md:text-center text-left mb-6">
          <h2 className="md:text-3xl text-2xl font-bold my-4">Biggest challenges in implementing AI in businesses</h2>
          <p className="text-gray-500 md:text-md text-base md:px-3 px-0">
            In today's rapidly evolving digital landscape, the integration of artificial intelligence (AI) and data analytics has transformed the way organizations operate and make decisions. Leveraging these technologies enables businesses to unlock a wealth of opportunities that were previously unimaginable. By analyzing vast amounts of data, AI algorithms can identify patterns, trends, and insights that help organizations make informed decisions swiftly and accurately.
            One of the primary advantages of using AI and data is the ability to enhance operational efficiency. Automated processes reduce the burden of manual tasks, allowing employees to focus on more strategic initiatives. For instance, AI-powered tools can streamline customer service through chatbots, providing instant support and freeing human agents to tackle more complex issues. This not only improves response times but also enhances customer satisfaction.
            Moreover, data-driven decision-making fosters a culture of innovation. Organizations that harness AI can experiment with new ideas and strategies based on empirical evidence, reducing the risks associated with trial and error. This capability is particularly crucial in competitive markets where agility and adaptability are key to success.
            Additionally, AI and data analytics facilitate personalized experiences for customers. By analyzing user behavior and preferences, businesses can tailor their products and services to meet specific needs, thereby increasing customer loyalty and driving sales.
          </p>
        </div>
        <div>
          {/* Monthly Yearly button  */}
          <div className="flex justify-center items-center my-4">
            <button
              className="py-2 px-6 bg-blue-700 text-white font-semibold border rounded-md mr-1"
            >
              Monthly
            </button>
            <button
              className="py-2 px-6 bg-white text-black font-semibold border rounded-md"
            >
              yearly
            </button>
          </div>
          <div className="my-6 md:flex md:flex-row flex-col justify-center mx-auto">
            {/* pro Card  */}
            <div className="px-6 py-8 border rounded-2xl shadow-lg md:w-[35%] w-full md:mr-4 md:mb-0 mb-4">
              <h1 className="text-3xl font-bold my-2">Pro</h1>
              <p className="text-gray-500">
                The perfect plan if you're just getting started with our product
              </p>
              <h1 className="text-lg font-bold mb-5 mt-2">HK<span className="text-2xl">$89</span><span className="font-normal text-gray-500">/Month</span></h1>
              <ul className="pl-3 space-y-2 text-gray-500 mb-14">
                <li className="flex items-start">
                  <span className="text-green-500 font-light mr-2">✓</span>
                  1,000 Monthly T-Points for AI Assistant
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-light mr-2">✓</span>
                  Free access to authentic data
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-light mr-2">✓</span>
                  Advanced analytics and visualization
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-light mr-2">✓</span>
                  24-hour support response time
                </li>
              </ul>
              <button
                className="w-full py-2 px-5 bg-pink-600 text-white font-semibold rounded-md"
              >
                Purchase Now
              </button>
            </div>

            {/* Enterprise Card */}
            <div className="px-6 py-8 border rounded-2xl shadow-lg md:w-[35%] w-full bg-yellow-300">
              <h1 className="text-3xl font-bold my-2">Enterprise</h1>
              <p className="text-gray-500 mb-8">
                Dedicated support and infrastructure for your company
              </p>
              <ul className="pl-3 space-y-2 text-gray-500 mb-14">
                <li className="flex items-start">
                  <span className="text-green-500 font-light mr-2">✓</span>
                  Unlimited monthly tokens for AI Assistant
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-light mr-2">✓</span>
                  Advanced large language models
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-light mr-2">✓</span>
                  Advanced analytics
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-light mr-2">✓</span>
                  Dedicated support representative
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-light mr-2">✓</span>
                  Custom integrations to API
                </li>

              </ul>
              <button
                className="w-full md:text-md text-sm py-2 px-5 bg-pink-600 text-white font-semibold rounded-md"
              >
                Contact our Account Manager
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Section  */}
      <div className="my-16">
        <div>
          <h1 className="text-2xl font-semibold">Recommend Articles</h1>
          <p className="text-gray-500">Demonstrating the return on investment from AI</p>
        </div>
        <div className="my-6 grid md:grid-cols-6 grid-cols-2 md:gap-1 gap-y-4">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngtwcvE2cXxCgXDLksJt6ySm_e4CZ-USqfg&s" className="md:h-[170px] h-[140px] md:w-[165px] w-[135px] rounded-lg" alt="" />
            <h1 className="md:text-md text-sm font-semibold mt-1">Thinking Components</h1>
            <p className="text-gray-500">Lena Logic</p>
          </div>

          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngtwcvE2cXxCgXDLksJt6ySm_e4CZ-USqfg&s" className="md:h-[170px] h-[140px] md:w-[165px] w-[135px] rounded-lg" alt="" />
            <h1 className="md:text-md text-sm font-semibold mt-1">Thinking Components</h1>
            <p className="text-gray-500">Lena Logic</p>
          </div>

          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngtwcvE2cXxCgXDLksJt6ySm_e4CZ-USqfg&s" className="md:h-[170px] h-[140px] md:w-[165px] w-[135px] rounded-lg" alt="" />
            <h1 className="md:text-md text-sm font-semibold mt-1">Thinking Components</h1>
            <p className="text-gray-500">Lena Logic</p>
          </div>

          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngtwcvE2cXxCgXDLksJt6ySm_e4CZ-USqfg&s" className="md:h-[170px] h-[140px] md:w-[165px] w-[135px] rounded-lg" alt="" />
            <h1 className="md:text-md text-sm font-semibold mt-1">Thinking Components</h1>
            <p className="text-gray-500">Lena Logic</p>
          </div>

          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngtwcvE2cXxCgXDLksJt6ySm_e4CZ-USqfg&s" className="md:h-[170px] h-[140px] md:w-[165px] w-[135px] rounded-lg" alt="" />
            <h1 className="md:text-md text-sm font-semibold mt-1">Thinking Components</h1>
            <p className="text-gray-500">Lena Logic</p>
          </div>

          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngtwcvE2cXxCgXDLksJt6ySm_e4CZ-USqfg&s" className="md:h-[170px] h-[140px] md:w-[165px] w-[135px] rounded-lg" alt="" />
            <h1 className="md:text-md text-sm font-semibold mt-1">Thinking Components</h1>
            <p className="text-gray-500">Lena Logic</p>
          </div>
        </div>
      </div>
    </div>
  )
}
