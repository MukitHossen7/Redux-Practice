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
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import type { ITasks } from "@/interface/tasks.interface/tasks.interface";
import { Textarea } from "../ui/textarea";

export function TaskModel() {
  const form = useForm<ITasks>();
  const onSubmit = (data: ITasks): void => {
    console.log(data);
  };
  return (
    <Dialog>
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
                      {/* <Input placeholder="description" {...field} /> */}
                      <Textarea
                        placeholder="description"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-2">DueDate</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="DueDate"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-2">Priority</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="priority"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
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
