"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Input } from "../ui/input";

type DropDownProps = {
  value?: string[]; // Expect an array of selected categories
  onChangeHandler?: (value: string[]) => void; // Return array of selected values
};

interface Category {
  id: string;
  categoryName: string;
}

const DropDown = ({ value = [], onChangeHandler }: DropDownProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/categories/get-categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, []);

  // Handle selection of categories
  const handleSelect = (selected: string) => {
    let updatedValue: string[];

    // Toggle category selection
    if (value.includes(selected)) {
      updatedValue = value.filter((v) => v !== selected);
    } else {
      updatedValue = [...value, selected]; 
    }

    // Pass updated categories array to form handler
    onChangeHandler?.(updatedValue);
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;

    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/api/v1/categories/create", {
        categoryName: newCategory.trim(),
      });
      setCategories((prevCategories) => [...prevCategories, response.data]);
      setNewCategory(""); // Reset input
    } catch (error) {
      console.error("Error adding category", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Select
      onValueChange={handleSelect} // Handle a single value and toggle it in the array
      defaultValue={value[0]} // Set the first selected value as the default
    >
      <SelectTrigger
        className="w-full h-[54px] placeholder:text-grey-500 rounded-full p-regular-16 px-5 py-3 border-[1px] border-slate-400 focus-visible:ring-transparent focus:ring-transparent text-[16px] font-normal leading-[24px]"
      >
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categories.length > 0 &&
            categories.map((category: Category) => (
              <SelectItem
                key={category.id}
                value={category.id}
                className="py-3 cursor-pointer focus:bg-gray-100 text-[14px] font-semibold leading-[20px]"
              >
                {category.categoryName}
              </SelectItem>
            ))}

          {/* Add New Category Dialog */}
          <AlertDialog>
            <AlertDialogTrigger className="flex w-full text-lg font-bold leading-[20px] rounded-sm py-3 pl-8 hover:bg-gray-100 focus:text-slate-500">
              Add new category
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
              <AlertDialogHeader>
                <AlertDialogTitle>New Category</AlertDialogTitle>
                <AlertDialogDescription>
                  <Input
                    type="text"
                    placeholder="Category name"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3 border-[1px] border-slate-400 focus-visible:ring-transparent mt-3"
                  />
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleAddCategory} disabled={isLoading}>
                  {isLoading ? "Adding..." : "Add"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default DropDown;
