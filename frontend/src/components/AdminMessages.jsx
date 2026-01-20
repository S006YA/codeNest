import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Mail, Calendar, User, Copy, CheckCircle2, Trash2 } from 'lucide-react';
import { Button } from './ui/button';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState('all'); // all, new, read

  useEffect(() => {
    fetchMessages();
    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchMessages, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${API}/contact`);
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredMessages = messages.filter(msg => {
    if (filter === 'new') return msg.status === 'new';
    if (filter === 'read') return msg.status === 'read';
    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0f1e] flex items-center justify-center">
        <div className="text-[#00d9ff] text-xl">Loading messages...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f1e] py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Messages</h1>
          <p className="text-gray-400">Total: {messages.length} messages</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-8">
          <Button
            onClick={() => setFilter('all')}
            className={`${
              filter === 'all'
                ? 'bg-[#00d9ff] text-[#0a0f1e]'
                : 'bg-[#1a1f2e] text-[#00d9ff] border border-[#00d9ff]/20'
            }`}
          >
            All
          </Button>
          <Button
            onClick={() => setFilter('new')}
            className={`${
              filter === 'new'
                ? 'bg-[#00d9ff] text-[#0a0f1e]'
                : 'bg-[#1a1f2e] text-[#00d9ff] border border-[#00d9ff]/20'
            }`}
          >
            New
          </Button>
          <Button
            onClick={() => setFilter('read')}
            className={`${
              filter === 'read'
                ? 'bg-[#00d9ff] text-[#0a0f1e]'
                : 'bg-[#1a1f2e] text-[#00d9ff] border border-[#00d9ff]/20'
            }`}
          >
            Read
          </Button>
        </div>

        {/* Messages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              onClick={() => setSelectedMessage(message)}
              className="bg-[#1a1f2e] rounded-xl p-6 border border-[#00d9ff]/20 hover:border-[#00d9ff]/40 cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.15)]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{message.name}</h3>
                  <p className="text-sm text-[#00d9ff] break-all">{message.email}</p>
                </div>
                {message.status === 'new' && (
                  <span className="bg-[#00d9ff] text-[#0a0f1e] text-xs px-3 py-1 rounded-full font-bold">
                    NEW
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">{message.message}</p>
              <p className="text-xs text-gray-500">{formatDate(message.submitted_at)}</p>
            </div>
          ))}
        </div>

        {filteredMessages.length === 0 && (
          <div className="text-center py-12">
            <Mail className="w-16 h-16 text-[#00d9ff]/30 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No messages found</p>
          </div>
        )}

        {/* Detail Modal */}
        {selectedMessage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-[#1a1f2e] rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-[#00d9ff]/20">
              {/* Close Button */}
              <button
                onClick={() => setSelectedMessage(null)}
                className="float-right text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>

              {/* Message Details */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-4">Message Details</h2>

                <div className="space-y-4">
                  {/* From */}
                  <div>
                    <p className="text-sm text-gray-400 mb-1">From</p>
                    <div className="flex items-center justify-between bg-[#0a0f1e] p-3 rounded-lg">
                      <span className="text-white font-semibold">{selectedMessage.name}</span>
                      <User className="w-4 h-4 text-[#00d9ff]" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <div className="flex items-center justify-between bg-[#0a0f1e] p-3 rounded-lg">
                      <a
                        href={`mailto:${selectedMessage.email}`}
                        className="text-[#00d9ff] hover:text-[#00bfe6] break-all"
                      >
                        {selectedMessage.email}
                      </a>
                      <button
                        onClick={() => copyToClipboard(selectedMessage.email)}
                        className="ml-2 p-2 hover:bg-[#1a1f2e] rounded"
                      >
                        {copied ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-[#00d9ff]" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Received</p>
                    <div className="flex items-center bg-[#0a0f1e] p-3 rounded-lg">
                      <Calendar className="w-4 h-4 text-[#00d9ff] mr-2" />
                      <span className="text-white">
                        {formatDate(selectedMessage.submitted_at)}
                      </span>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Message</p>
                    <div className="bg-[#0a0f1e] p-4 rounded-lg border border-[#00d9ff]/10">
                      <p className="text-gray-300 whitespace-pre-wrap">
                        {selectedMessage.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-[#00d9ff]/10">
                <Button
                  onClick={() => copyToClipboard(selectedMessage.message)}
                  className="flex-1 bg-[#00d9ff]/10 text-[#00d9ff] hover:bg-[#00d9ff]/20 border border-[#00d9ff]/30"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Message
                </Button>
                <Button
                  onClick={() => {
                    window.open(`mailto:${selectedMessage.email}`, '_blank');
                  }}
                  className="flex-1 bg-[#00d9ff] text-[#0a0f1e] hover:bg-[#00bfe6]"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Reply
                </Button>
                <Button
                  onClick={() => setSelectedMessage(null)}
                  className="flex-1 bg-[#1a1f2e] text-gray-400 border border-gray-600 hover:bg-[#0a0f1e]"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessages;
