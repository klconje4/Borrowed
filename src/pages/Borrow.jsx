import Navbar from '../components/Navbar'
import '../styles/Borrow.css'
import { useState } from 'react'

const categories = ['All', 'Snacks', 'Food', 'Baking', 'Furniture', 'Outdoors', 'Services', 'Clothing', 'Misc']

const posts = [
  { id: 1, title: 'Baking soda', category: 'Baking', desc: 'Only need a teaspoon', user: 'Maye Chiechio', time: '9h ago' },
  { id: 2, title: 'Vanilla extract', category: 'Baking', desc: 'Just a few drops for my recipe', user: 'Dennie Twizell', time: '8h ago' },
  { id: 3, title: 'Brown sugar', category: 'Baking', desc: 'Need half a cup', user: 'Andras Budleigh', time: '8h ago' },
  { id: 4, title: 'Chocolate chips', category: 'Baking', desc: 'Making cookies tonight!', user: 'Lefty Flight', time: '8h ago' },
  { id: 5, title: 'Folding chair', category: 'Furniture', desc: 'Need for a small gathering', user: 'Sara Okonkwo', time: '5h ago' },
  { id: 6, title: 'Camping tent', category: 'Outdoors', desc: 'Weekend trip, just 2 nights', user: 'Raj Patel', time: '3h ago' },
  { id: 7, title: 'Black dress', category: 'Clothing', desc: 'Size S, for a formal event', user: 'Mia Torres', time: '1h ago' },
]

export default function Borrow() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active)

  return (
    <>
      <Navbar />
      <div className="borrow-page">

        <div className="borrow-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-pill ${active === cat ? 'filter-pill--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {active === cat && <span className="filter-check">✓</span>} {cat}
            </button>
          ))}
        </div>

        <div className="borrow-list">
          {filtered.map(post => (
            <div className="borrow-card" key={post.id}>
              <div className="borrow-card__left">
                <h3 className="borrow-card__title">{post.title}</h3>
                <span className="borrow-card__tag">{post.category}</span>
                <p className="borrow-card__desc">{post.desc}</p>
              </div>
              <div className="borrow-card__right">
                <span className="borrow-card__time">🕐 {post.time}</span>
                <div className="borrow-card__user">
                  <span className="borrow-card__username">{post.user}</span>
                  <div className="borrow-card__avatar">{post.user[0]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="borrow-fab">
          <button className="fab-btn">
            <span>🔍</span>
            <span className="fab-label">Search</span>
          </button>
          <button className="fab-btn fab-btn--post">＋</button>
          <button className="fab-btn">🔔</button>
        </div>

      </div>
    </>
  )
}