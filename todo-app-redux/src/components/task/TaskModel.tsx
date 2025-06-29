import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import type { ITasks } from "@/interface/tasks.interface/tasks.interface";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addTask } from "@/redux/features/task/taskSlice";
import { useState } from "react";
import { selectUsers } from "@/redux/features/user/userSlice";

export function TaskModel() {
  const [open, setOpen] = useState(false);
  const form = useForm();
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const taskWithFormattedDate = {
      ...data,
      dueDate:
        data.dueDate instanceof Date
          ? data.dueDate.toISOString()
          : data.dueDate,
    };

    dispatch(addTask(taskWithFormattedDate as ITasks));
    form.reset();
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="title"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-2">Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="description"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* dropdown */}
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="mt-2">Priority</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a priority" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              {/* dropdown user*/}
              <FormField
                control={form.control}
                name="assignedTo"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="mt-2">AssignedTo</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a AssignedTo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {users.map((user) => (
                          <SelectItem value={user?.name}>
                            {user?.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              {/* date */}
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="mt-2">DueDate</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>DueDate</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={field.onChange}
                          // disabled={(date) =>
                          //   date > new Date() || date < new Date("1900-01-01")
                          // }
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <DialogFooter className="mt-5">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
}
