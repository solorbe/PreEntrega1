// export const getEvents = async (req, res) => {
// try {
// res.json({ message: 'Listado de eventos' })
// } catch (error) {
// res.status(500).json({ error: 'Error al obtener eventos' })
// }
// }

// export const createEvent = async (req, res) => {
// try {
// res.json({ message: 'Evento creado' })
// } catch (error) {
// res.status(500).json({ error: 'Error al crear evento' })
// }
// }


import { EventModel } from '../models/events.model.js';

export class EventsController {
  static getAll = async (req, res) => {
    try {
      const events = await EventModel.find();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
