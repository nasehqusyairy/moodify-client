'use client'
import { useEffect, useState } from "react";
import url from "../config/config";
export default function Home() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(url + '/categories')
      .then(res => res.json())
      .then(data => setCategories(data.categories));
  }, [])

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <form>
              <div className="mb-3">
                <label htmlFor="mood">How are you today?</label>
                <select name="id" id="mood" className="form-select">
                  {categories.map((category, i) => (
                    <option key={i} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </form>
            <p></p>
          </div>
        </div>
      </div>
    </main>
  )
}
